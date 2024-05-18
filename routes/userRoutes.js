// src/routes/userRoutes.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/create', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    state: req.body.state,
    dateofbirth: req.body.dateofbirth,
    qualification: req.body.qualification,
    course: req.body.course
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
