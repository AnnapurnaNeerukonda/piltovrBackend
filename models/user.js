// src/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: Date,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
