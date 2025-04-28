import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the mood-based challenges, advice, and humor
const moodData = {
  Happy: {
    advice: "You're radiating positivity today! Keep spreading that joy. Just remember, even the brightest stars need their rest—don’t forget to recharge!",
    challenge: "Send a quick note of appreciation to someone who has brightened your day. It'll make both of you smile.",
    joke: "Why don’t skeletons fight each other? They don’t have the guts! 😄",
    emoji: "😊"
  },
  Sad: {
    advice: "It's okay to feel down sometimes. Your feelings are valid. Take your time, and don’t forget to be kind to yourself.",
    challenge: "Try journaling three things you're grateful for, no matter how small. It can be a great way to shift focus.",
    joke: "Why don't scientists trust atoms? Because they make up everything! 😆",
    emoji: "😞"
  },
  Anxious: {
    advice: "Take it slow and breathe deeply. Try focusing on the present moment. Everything will work out, step by step.",
    challenge: "Find a quiet space, close your eyes, and take five minutes to practice deep breathing. Breathe in for 4 sec, hold for 4 sec, and exhale for 4 sec.",
    joke: "I told my computer I needed a break, and it froze! 😜",
    emoji: "😰"
  },
  Angry: {
    advice: "It’s okay to feel frustrated. Rather than bottling it up, try to release it through gentle physical activity or a change of scenery.",
    challenge: "Take a 10-minute walk in nature or do some stretches to release that built-up tension.",
    joke: "I burned 1,000 calories yesterday... I forgot the pizza in the oven! 🍕😂",
    emoji: "😡"
  },
  Tired: {
    advice: "Your body is asking for rest, and it’s crucial to listen to it. Taking short breaks and getting rest can make all the difference.",
    challenge: "Take a 20-minute power nap. Recharging now will help you feel more focused and energized later!",
    joke: "Why don’t eggs tell jokes? They might crack up! 🥚😆",
    emoji: "😴"
  }
};

const mentalHealthQuestions = [
  { question: "How are you feeling today?", options: ["Happy", "Sad", "Anxious", "Angry", "Tired"] },
  { question: "How stressed are you today?", options: ["Low", "Medium", "High"] },
  { question: "How well did you sleep last night?", options: ["Good", "Okay", "Poor"] },
  { question: "How easy is it to focus on tasks today?", options: ["Yes", "No", "Sometimes"] },
  { question: "Are you feeling overwhelmed today?", options: ["Yes", "No", "Sometimes"] }
];

function MoodRecommendation() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [mentalState, setMentalState] = useState('');
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [clickedButtons, setClickedButtons] = useState({});

  // Handle answer selection
  const handleAnswerSelection = (questionIndex, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answer;
    setSelectedAnswers(newAnswers);

    // Mark the button as clicked
    setClickedButtons((prevState) => ({
      ...prevState,
      [`${questionIndex}-${answer}`]: true
    }));
  };

  // Analyzing the mental state based on answers
  const analyzeMentalState = () => {
    const [mood, stress, sleep, focus, overwhelmed] = selectedAnswers;
    let analysis = "";
    let moodType = "";

    if (stress === "High" || overwhelmed === "Yes") {
      analysis = "It seems you're feeling quite stressed today. Take a moment to relax and focus on some deep breathing. You’ve got this!";
      moodType = "Anxious";
    } else if (sleep === "Poor" || focus === "No") {
      analysis = "It seems like your energy might be low today. A good nap or a short break could work wonders for you!";
      moodType = "Tired";
    } else if (mood === "Sad" || mood === "Very Sad") {
      analysis = "It's okay to feel down sometimes. You're not alone—take care of yourself, and don't hesitate to reach out to a friend or family member.";
      moodType = "Sad";
    } else if (mood === "Angry") {
      analysis = "It looks like you're experiencing some anger. A short walk or some stretching can really help you cool down.";
      moodType = "Angry";
    } else {
      analysis = "You're in a great state of mind! Keep up the positivity, and remember to stay balanced.";
      moodType = "Happy";
    }

    setMentalState(analysis);
    provideRecommendation(moodType);
  };

  const provideRecommendation = (moodType) => {
    const recommendation = moodData[moodType];
    console.log("Mood: ", moodType);
    console.log("Advice: ", recommendation.advice);
    console.log("Challenge: ", recommendation.challenge);
    console.log("Joke: ", recommendation.joke);
  };

  const handleChallengeCompletion = () => {
    setChallengeCompleted(true);
    submitMoodData();  // Optionally send the data when the challenge is completed
  };

  // Submit mood data to the backend (optional)
  const submitMoodData = async () => {
    try {
      await axios.post('http://localhost:5000/api/mood', { answers: selectedAnswers });
      console.log("Mood data submitted successfully!");
    } catch (error) {
      console.error("Error submitting mood data:", error);
    }
  };

  // Trigger the analyzeMentalState function once all questions are answered
  useEffect(() => {
    if (selectedAnswers.length === 5) {
      analyzeMentalState();
    }
  }, [selectedAnswers]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '4rem 2rem', marginLeft: '2rem', height: '100vh', overflowY: 'scroll' }}>
      {/* Left side: Heading and soothing image */}
      <div style={{
        flex: 1,
        textAlign: 'left',
        paddingRight: '2rem',
        position: 'sticky',
        top: '20px',
        zIndex: 10,
        backgroundColor: '#fff', // To make sure it has background
        padding: '1rem'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>WELLSPHERE MOOD ENHANCER</h2>
        <img
          src="/img/mood.jpg"  // Path to your image in the public folder
          alt="Soothing Image"
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginTop: '1rem'
          }}
        />
      </div>

      {/* Right side: Questions, analysis, and recommendation */}
      <div style={{ flex: 2, marginLeft: '2rem', overflowY: 'auto', maxHeight: '100vh' }}>
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
                    backgroundColor: clickedButtons[`${index}-${option}`] ? '#FFA500' : '#FFCC00', // Orange when clicked
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

          {/* Show Analysis, Selections, Health Advice, Challenge, and Joke after answering all questions */}
          {selectedAnswers.length === 5 && (
            <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '500px', margin: '2rem auto' }}>
              <h3>Analysis of Your Mental State:</h3>
              <p>{mentalState}</p>

              <h3>Your Selections:</h3>
              <ul style={{ textAlign: 'left', listStyleType: 'none', paddingLeft: '0' }}>
                {mentalHealthQuestions.map((q, index) => (
                  <li key={index}>
                    <strong>{q.question}</strong>: {selectedAnswers[index] || "Not answered yet"}
                  </li>
                ))}
              </ul>

              <h3>Health Advice:</h3>
              <p>{moodData[selectedAnswers[0]]?.advice || 'No advice available'}</p>

              <h3>Today's Challenge:</h3>
              <p>{moodData[selectedAnswers[0]]?.challenge || 'No challenge available'}</p>

              <h3>Joke for You:</h3>
              <p>{moodData[selectedAnswers[0]]?.joke || 'No joke available'}</p>

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
              <h3>You're Amazing!</h3>
              <p>Great job! You're one step closer to a healthier mind.</p>
              <p>Stay proud of your progress!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodRecommendation;
