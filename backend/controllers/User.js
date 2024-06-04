const User = require('./../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const validator = require('validator')

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //valid input 
    if(!username || !email || !password){
      throw new Error('Enter all fields')
    }
    if(!validator.isEmail(email)){
      throw new Error('Please enter a valid email')
    } 
    if(!validator.isLength(password, { min: 6 })){
      throw new Error('Password must be at least 6 characters long')
    }

    const exists = await User.findOne({ $or: [{ username }, { email }] });
    if (exists) {
      throw new Error(`User ${username} or ${email} already exists`);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({username,email,password:hashPassword});
    console.log(`User created with username ${username}`)
    res.status(200).json({
      success: true,
      data:user,
      message:'User created successfully'
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message:error.message
    })
  }
}

exports.login = async (req, res) => {
  try {
    const {email,password} = req.body
    if(!email || !password){
      throw new Error('Enter all fields')
    }
    const user = await User.findOne({email});
    const userData = {
      username: user.username,
      email: user.email
    }
    
    res.status(200).json({
      success: true,
      data:userData,
      message:'Logged in successfully'
    })
      
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      success: false,
      message:error.message
    })
  }
}

exports.getUsers = async(req,res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      data:users,
      message:"Fetching all users"
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      success: false,
      message:error.message,
    })
  }
}