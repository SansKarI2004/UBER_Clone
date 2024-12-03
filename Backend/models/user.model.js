const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Define the user schema
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, 'Last name must be at least 3 characters long'],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'Email must be at least 3 characters long'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], // Validate email format
  },
  password: {
    type: String,
    required: true,
    select: false,  // Exclude password from query results by default
  },
  socketId: {
    type: String,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Method to generate an authentication token for the user
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id },  // The payload, usually the user ID
    process.env.JWT_SECRET,  // Secret key from environment variables
    { expiresIn: '24h' }  // Token expiration time (24 hours)
  );
  return token;
};

// Method to compare the given password with the stored password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);  // Compares input password with stored password
};

// Static method to hash the password before saving to the database
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);  // Hash the password using bcrypt
};

// Hash the password before saving the user to the database
userSchema.pre('save', async function (next) {
  // Only hash the password if it's modified (or new)
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);  
  }
  next();
});

// Create a User model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
  