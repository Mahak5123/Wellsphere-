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
const MONGO_URI = 'mongodb://localhost:27017/userAuthApp';  // Fixed URI with DB name

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
})
.catch((err) => console.error('Error connecting to MongoDB:', err));
