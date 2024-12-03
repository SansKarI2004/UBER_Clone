const mongoose = require('mongoose');

// Define the blacklist schema
const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate tokens
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});

// Export the model
module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
