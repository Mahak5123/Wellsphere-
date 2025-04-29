import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define mood-based challenges, advice, and humor
const moodData = {
  Happy: {
    advice: "You're radiating positivity today! Keep spreading that joy. Remember to recharge too! Positive energy is contagious, but so is self-care.",
    challenge: "Send a message of appreciation to someone you care about. It's a simple gesture that can brighten both your and their day.",
    joke: "Student: 'I don’t understand this question, can you explain it to me?'\nTeacher: 'You don’t need to understand it, you just need to remember it!'\nStudent: 'So, like the syllabus?' 😄",
    emoji: "😊"
  },
  Sad: {
    advice: "It's okay to feel down. Be kind to yourself and allow time for healing. Remember that emotional ups and downs are a part of life and seeking support is a strength.",
    challenge: "Write down three things you’re grateful for today. Shifting your focus to gratitude can help lift your mood, even when times are tough.",
    joke: "Teacher: 'Why are you late?'\nStudent: 'Because of the sign.'\nTeacher: 'What sign?'\nStudent: 'The one that says 'School Ahead, Slow Down.'' 😂",
    emoji: "😞"
  },
  Anxious: {
    advice: "Focus on the present moment and take deep breaths. You’re doing your best. Anxiety can be overwhelming, but remember: deep breaths help calm the mind and body.",
    challenge: "Practice deep breathing: inhale for 4s, hold for 4s, exhale for 4s. This can activate your body’s relaxation response and reduce anxiety.",
    joke: "Student: 'Can I go to the bathroom?'\nTeacher: 'I don’t know, can you?'\nStudent: 'I didn’t ask if I could, I asked if I may.'\nTeacher: 'Nice try. Go ahead, but I’m marking you for using proper English!' 😎",
    emoji: "😰"
  },
  Angry: {
    advice: "Release the anger through a peaceful walk or stretching. Calmness will return. Anger can often cloud your judgment, so taking a moment to clear your mind can help.",
    challenge: "Take a 10-minute nature walk or do light stretches. Physical activity can help release pent-up tension and improve your mood.",
    joke: "Teacher: 'You’re always talking in class.'\nStudent: 'I know, I can’t help it. I’m very social.'\nTeacher: 'Well, your social skills will definitely help you when you’re paying your bills someday.' 😂",
    emoji: "😡"
  },
  Tired: {
    advice: "Rest is essential. Give yourself permission to recharge. Fatigue can cloud your judgment and decrease productivity. Take breaks when you need them.",
    challenge: "Take a 20-minute power nap or mindful break. A short rest can help improve focus, creativity, and overall well-being.",
    joke: "Student: 'Teacher, I don’t get it, I studied hard and still failed!'\nTeacher: 'Don’t worry, it’s just a minor setback.'\nStudent: 'Well, in that case, can I major in passing?' 😂",
    emoji: "😴"
  }
};

// Improved Mental Health Questions
const mentalHealthQuestions = [
  {
    question: "🌤️ How are you feeling emotionally today?",
    options: ["Joyful", "Calm", "A bit down", "Worried", "Frustrated", "Exhausted"]
  },
  {
    question: "💼 How would you rate your current stress level?",
    options: ["Very Low", "Manageable", "Moderate", "High", "Overwhelming"]
  },
  {
    question: "🛌 How well did you sleep last night?",
    options: ["Slept great", "Slept okay", "Had trouble sleeping", "Barely slept"]
  },
  {
    question: "🧠 How is your ability to focus today?",
    options: ["Very focused", "Somewhat focused", "Distracted", "Very distracted"]
  },
  {
    question: "🌪️ Are you feeling overwhelmed with your tasks?",
    options: ["Not at all", "A little", "Quite a bit", "Completely overwhelmed"]
  }
];

function MoodRecommendation() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [mentalState, setMentalState] = useState('');
  const [currentMoodType, setCurrentMoodType] = useState('');
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [clickedButtons, setClickedButtons] = useState({});

  // Handle answer selection
  const handleAnswerSelection = (questionIndex, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);

    // Mark button as clicked
    setClickedButtons((prev) => ({
      ...prev,
      [`${questionIndex}-${answer}`]: true
    }));
  };

  // Analyze mood based on selections
  const analyzeMentalState = () => {
    const [emotion, stress, sleep, focus, overwhelm] = selectedAnswers;
    let moodType = "";

    if (stress === "High" || stress === "Overwhelming" || overwhelm === "Quite a bit" || overwhelm === "Completely overwhelmed") {
      moodType = "Anxious";
    } else if (sleep === "Had trouble sleeping" || sleep === "Barely slept" || focus === "Distracted" || focus === "Very distracted") {
      moodType = "Tired";
    } else if (emotion === "A bit down") {
      moodType = "Sad";
    } else if (emotion === "Frustrated") {
      moodType = "Angry";
    } else {
      moodType = "Happy";
    }

    setMentalState(moodData[moodType]?.advice || "Take care of yourself!");
    setCurrentMoodType(moodType);
  };

  // Submit mood data
  const submitMoodData = async () => {
    try {
      await axios.post('http://localhost:5000/api/mood', { answers: selectedAnswers });
      console.log("Mood data submitted successfully!");
    } catch (error) {
      console.error("Error submitting mood data:", error);
    }
  };

  const handleChallengeCompletion = () => {
    setChallengeCompleted(true);
    submitMoodData();
  };

  // Auto-analyze when all 5 answers selected
  useEffect(() => {
    if (selectedAnswers.length === 5) {
      analyzeMentalState();
    }
  }, [selectedAnswers]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '4rem 2rem', marginLeft: '2rem', height: '100vh', overflowY: 'auto' }}>
      
      {/* Left Panel */}
      <div style={{
        flex: 1,
        textAlign: 'left',
        paddingRight: '2rem',
        position: 'sticky',
        top: '20px',
        backgroundColor: '#fff',
        padding: '1rem'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
          WELLSPHERE MOOD ENHANCER
        </h2>
        <img
          src="/img/mood.jpg"
          alt="Mood Enhancer"
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginTop: '1rem'
          }}
        />
      </div>

      {/* Right Panel */}
      <div style={{ flex: 2, marginLeft: '2rem', overflowY: 'auto', maxHeight: '100vh', paddingBottom: '2rem' }}>
        <div style={{ margin: '1rem' }}>
          {mentalHealthQuestions.map((q, index) => (
            <div key={index} style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{q.question}</h4>
              {q.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelection(index, option)}
                  style={{
                    margin: '0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '14px',
                    borderRadius: '8px',
                    backgroundColor: clickedButtons[`${index}-${option}`] ? '#FFA500' : '#FFCC00',
                    color: 'black',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  {option} {moodData[option]?.emoji || ''}
                </button>
              ))}
            </div>
          ))}

          {selectedAnswers.length === 5 && (
            <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '500px', margin: '2rem auto' }}>
              <h3>🧠 Analysis of Your Mood:</h3>
              <p>{mentalState}</p>

              <h3>📋 Your Answers:</h3>
              <ul style={{ textAlign: 'left', listStyleType: 'none', paddingLeft: '0' }}>
                {mentalHealthQuestions.map((q, idx) => (
                  <li key={idx}><strong>{q.question}</strong>: {selectedAnswers[idx]}</li>
                ))}
              </ul>

              <h3>🌟 Health Tip:</h3>
              <p>{moodData[currentMoodType]?.advice}</p>

              <h3>🏆 Today's Challenge:</h3>
              <p>{moodData[currentMoodType]?.challenge}</p>

              <h3>😂 Here's a Joke:</h3>
              <pre>{moodData[currentMoodType]?.joke}</pre>

              <button
                onClick={handleChallengeCompletion}
                style={{
                  marginTop: '1rem',
                  padding: '1rem 2rem',
                  fontSize: '16px',
                  borderRadius: '10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Done with Challenge
              </button>
            </div>
          )}

          {challengeCompleted && (
            <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '500px', margin: '2rem auto' }}>
              <h3>🎉 You're Awesome!</h3>
              <p>You've taken a beautiful step toward caring for your mind. Stay proud of your progress!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodRecommendation;
