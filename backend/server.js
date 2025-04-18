const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/';  // Replace this with your actual MongoDB connection string

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(5000, () => {  // Use the port you want, here we use 5000
      console.log('Server running on port 5000');
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));  // Error handling
