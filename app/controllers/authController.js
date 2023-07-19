// authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');
const validate = require("../utils/validation")
const passwordValidate=require("../utils/validation")
const jwt = require('jsonwebtoken');
require('dotenv').config();
// User login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Check if the password is valid
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
      const token = jwt.sign({ userId: user._id },process.env.TOKENKEY, { expiresIn: "7d" });
    // Authentication successful
    res.status(200).json({ message: 'Login successful',token: token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User registration
exports.register = async (req, res) => {
  try {
      const { username, password, email } = req.body;
      // Check if the username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
      }

      let flag=validate.validateEmail(email) 
      if (!flag) return res.send(`Invalid email`);
      
      let passwordFlag = passwordValidate.validatePasswordStrength(password);
      if (!passwordFlag) return res.send(`Invalid password`);

   

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
