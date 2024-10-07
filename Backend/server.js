require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require('path');

// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



const User = require("./models/User");
const Contact = require("./models/Contact");



const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Frontend/dist')));


const JWT_SECRET = process.env.JWT_SECRET;; 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  
  const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded; // Store user data from token
      next();
    } catch (error) {
      res.status(403).json({ message: 'Invalid token' });
    }
  };

  app.get('/grocery', authenticateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id); // Get user from the token's decoded data
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });


// POST route to handle form submissions
app.post('/contact',authenticateToken, async (req, res) => {
  const { name, email, message } = req.body; 
  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please fill all fields' });
  }
  const newContact = new Contact({ name, email, message });
  try {
    await newContact.save();
    res.status(201).json({ msg: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error, try again later.' });
  }
});


//sign Up Route

app.post('/signup', async (req, res) => {
  console.log(req.body);
  const {username , email , password} = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please fill all fields' });
  }

  try {
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({message : "User already Exist"});
    }
    const hashedPassword = await bcrypt.hash(password , 10);

    const newUser = new User({
      username,
      email , 
      password : hashedPassword,
    });

    await newUser.save();

    res.status(201).json({message : "User created Successfully"});
  }catch(error) {
    res.status(500).json({message : "Error Creating user", error});
  }
});

app.post("/login" , async (req, res) => {
  const {email , password} = req.body;

  try {
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({message : "Invalid credentials"});
    }

    //compare password with hashed password
    const isPasswordValid = await bcrypt.compare(password , user.password);
    if(!isPasswordValid){
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({id : user._id , email : user.email} , JWT_SECRET , {
      expiresIn  : '1h',
    });

    res.status(200).json({token , username : user.username});
  }
  catch(error){
      res.status(500).json({message : "Error during Sign-In"});
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

// Start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




