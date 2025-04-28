// backend/controllers/moodController.js

exports.handleMoodData = (req, res) => {
    const moodData = req.body.answers;
    console.log("User mood data received:", moodData);
  
    // (Optional) Save moodData to database if needed.
  
    res.status(200).json({ message: "Mood data received successfully!" });
  };
  