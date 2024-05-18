// src/index.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors =require("cors")
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
mongoose.connect("mongodb+srv://annapurna2005k:annapurna2005k@cluster0.twwusul.mongodb.net/collegeweb?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
