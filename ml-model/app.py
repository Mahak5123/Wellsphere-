import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
import pickle
import os

app = Flask(__name__)

# Load the trained model
try:
    model = pickle.load(open('RandomForest.pkl', 'rb'))
    print(f"✅ Model loaded successfully: {type(model)}")
except FileNotFoundError:
    raise Exception("❌ Model file 'RandomForest.pkl' not found.")
except Exception as e:
    raise Exception(f"❌ Error loading model: {e}")

# Load supporting CSV files
current_directory = os.getcwd()

try:
    description = pd.read_csv(os.path.join(current_directory, 'description.csv'))
    diets = pd.read_csv(os.path.join(current_directory, 'diets.csv'))
    medications = pd.read_csv(os.path.join(current_directory, 'medications.csv'))
    precautions = pd.read_csv(os.path.join(current_directory, 'precautions_df.csv'))
    symptoms_severity = pd.read_csv(os.path.join(current_directory, 'Symptom-severity.csv'))
    symptoms_df = pd.read_csv(os.path.join(current_directory, 'symptoms_df.csv'))
    workout = pd.read_csv(os.path.join(current_directory, 'workout_df.csv'))
    training_data = pd.read_csv(os.path.join(current_directory, 'Training.csv'))
except FileNotFoundError as e:
    raise Exception(f"❌ CSV file not found: {e.filename}")

# Symptoms index map
symptoms_list = {symptom: idx for idx, symptom in enumerate(training_data.columns[:-1])}

# Function to fetch additional information for a predicted disease
def information(predicted_dis):
    disease_description = description[description['Disease'] == predicted_dis]['Description']
    disease_description = " ".join(disease_description) if not disease_description.empty else "No description available."

    disease_precautions = precautions[precautions['Disease'] == predicted_dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']].values
    disease_precautions = disease_precautions[0].tolist() if disease_precautions.size > 0 else "No precautions available."

    disease_medications = medications[medications['Disease'] == predicted_dis]['Medication'].values
    disease_medications = disease_medications.tolist() if disease_medications.size > 0 else "No medications available."

    disease_diet = diets[diets['Disease'] == predicted_dis]['Diet'].values
    disease_diet = disease_diet.tolist() if disease_diet.size > 0 else "No diet recommendations available."

    disease_workout = workout[workout['disease'] == predicted_dis]['workout'].values
    disease_workout = disease_workout.tolist() if disease_workout.size > 0 else "No workout recommendations available."

    return disease_description, disease_precautions, disease_medications, disease_diet, disease_workout

@app.route('/')
def home():
    return "🎉 Welcome to the Disease Prediction API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        symptoms = data.get('symptoms', [])

        input_features = np.zeros(len(symptoms_list))

        for symptom in symptoms:
            if symptom in symptoms_list:
                input_features[symptoms_list[symptom]] = 1

        print(f"🧠 Input features: {input_features}")  # Debugging line

        prediction = model.predict([input_features])
        predicted_disease = prediction[0]  # Directly get disease name

        disease_description, disease_precautions, disease_medications, disease_diet, disease_workout = information(predicted_disease)

        return jsonify({
            'predicted_disease': predicted_disease,
            'symptoms': symptoms,
            'description': disease_description,
            'precautions': disease_precautions,
            'medications': disease_medications,
            'diet': disease_diet,
            'workout': disease_workout
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
