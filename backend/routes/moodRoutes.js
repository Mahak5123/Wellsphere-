// backend/routes/moodRoutes.js

const express = require('express');
const router = express.Router();
const { handleMoodData } = require('../controllers/moodController');

router.post('/mood', handleMoodData);

module.exports = router;
