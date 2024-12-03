const userModel =require('../models/user.model');
const userService= require('../services/user.service');
const {validationResult} = require('express-validator');
const BlacklistTokenModel=require('../models/blacklistToken.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const express= require('express');
const router = express.Router();


module.exports.registerUser = async (req, res, next) => {
    try {
      // Validate request data
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
   
      // Destructure request body
      const { fullname, email, password } = req.body; // Fixed `req.body` typo
  
      // Check if the user already exists
      const isUserAlreadyExist = await userModel.findOne({ email });
      if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await userModel.hashPassword(password);
  
      // Create a new user
      const newUser = new userModel({
        fullname: {
          firstname: fullname.firstname,
          lastname: fullname.lastname,
        },
        email,
        password: hashedPassword, // Store the hashed password
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Generate a JWT token
      console.log('New User:', newUser);
      const token = newUser.generateAuthToken();
      console.log('Generated Token:', token);
  
      // Send the response
      res.status(201).json({ token, user: { fullname: newUser.fullname, email: newUser.email } });
    } catch (error) {
      console.error('Error in registerUser:', error);
      res.status(500).json({ message: 'Internal server error', error });
    }
  };
  

module.exports.loginUser=async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() });  
    }

    const {email,password}= req.body;

    const user=await userModel.findOne({email}).select('+password');
    
    if(!user) {
        return res.status(401).json({message:'INvalid email or password'});
    }

    const isMatch=await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'INvalid email or password'});
    }
    
    const token = user.generateAuthToken();
    res.cookie('token', token, {
        httpOnly: true,  // Make sure it's only accessible via HTTP requests
        secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
        maxAge: 24 * 60 * 60 * 1000,  // Expiry of 1 day
    }).status(200).json({ user }); 

}

module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser=async (req,res,next) =>{
    
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    await blacklistTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message:'logged out'});
}




