# Wellsphere – AI-Powered Smart Healthcare Platform

**Wellsphere** is an AI-integrated, full-stack healthcare web application designed to provide users with early disease prediction, real-time medical assistance, mental health analysis, and personalized hospital recommendations. This project aims to combine the power of **machine learning**, **intelligent chatbot systems**, and **user-friendly interfaces** to offer an all-in-one wellness solution.

---

## 🔗 Live Demo

> [Click here to view the demo](https://drive.google.com/file/d/1bwgjnZIsMI1CTdyHff8n5vDkpDfaKp3g/view?usp=sharing)  


---

## Project Objectives

- **Early Diagnosis:** Help users identify possible diseases based on symptoms using AI.
- **Mental Health Support:** Offer mood detection and wellness suggestions for emotional well-being.
- **Accessibility:** Enable users to find nearby hospitals for emergencies or further diagnosis.
- **Personalization:** Suggest health challenges based on mood to encourage daily wellness activities.

---

##  Features

- **Disease Prediction (95%+ Accuracy):**  
  Predicts possible diseases based on user-input symptoms using a pre-trained Random Forest ML model.

- **AI Health Chatbot (Groq API):**  
  Provides real-time responses to health queries, basic remedies, and emotional support.

- **Mood-Based Daily Wellness Engine (87% Accuracy):**  
  Detects user's mood using NLP-based analysis of a 5-question input and suggests relevant challenges or messages.

- **City-Based Hospital Recommendations:**  
  Displays a list of nearby hospitals based on the user's city for timely access to medical help.

- **Secure User Authentication:**  
  Registration and login handled via JWT, connected to a real-time MongoDB backend.

- **Responsive Frontend Design:**  
  Clean, intuitive, and responsive UI built with React.js and Tailwind CSS for a seamless user experience across devices.

---

## Tech Stack

| Layer           | Technologies                            |
|----------------|------------------------------------------|
| **Frontend**    | React.js, Tailwind CSS, React Router     |
| **Backend**     | Node.js, Express.js                      |
| **Database**    | MongoDB (Mongoose ORM)                   |
| **ML Model**    | Python, Flask, scikit-learn, Pandas      |
| **Chatbot API** | Groq API (OpenAI Compatible)             |
| **Auth**        | JWT (JSON Web Token)                     |
| **Deployment**  | Vercel / Render / Netlify *(as applicable)* |

---
## Installation and Setup

Follow these steps to get the project up and running locally on your machine.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

- git clone https://github.com/Mahak5123/Wellsphere-.git

- cd Wellsphere-
### 2. Install and Start the ML Model API

Navigate to the `ml-model` directory, and start the Flask API for the ML model:

- cd ml-model           

- python app.py          
### 3. Install and Start the Backend Server

Next, navigate to the backend directory, install necessary dependencies, and start the Node.js server:

- cd backend     

- npm install      

- node server.js      

### 4. Install and Start the Frontend React App

Finally, navigate to the frontend directory, install all necessary dependencies, and start the React development server:
cd frontend       

- npm install        

- npm start          

### 5. Access the Application

Once all the servers are running, open the following URLs in your browser:

- **Frontend (React):** `http://localhost:3000`
- **Backend (Node.js):** `http://localhost:5000`
- **ML API (Flask):** `http://localhost:5001`

  ## API Endpoints

### Backend (Node.js)

| Method | Endpoint        | Description        |
|--------|-----------------|--------------------|
| POST   | /api/register   | User signup        |
| POST   | /api/login      | User login         |

### ML Flask API

| Method | Endpoint        | Description                           |
|--------|-----------------|---------------------------------------|
| POST   | /predict        | Predict disease from symptom input   |

## Performance Stats

- **Disease Prediction Accuracy**: 95.3%
- **Mood Detection Accuracy**: 87.6% (based on a test group of 100+ users)
- **Chatbot Response Time**: < 1 second (Groq API)
- **Frontend Load Time**: ~0.9s on average (Lighthouse audit)

## Contributor

- **Mahak Salecha**  
  [GitHub](https://github.com/Mahak5123) | [LinkedIn](https://www.linkedin.com/in/mahak-salecha-9b5073271/)
- **Shriya Mishra**  
  [GitHub](https://github.com/Mahak5123) | [LinkedIn](https://www.linkedin.com/in/shriya-mishra-0b13aa298/)

## License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more information.

## Contact

If you’d like to connect, contribute, or discuss collaborations:

- **Email**: mahaksalecha61@gmail.com 


