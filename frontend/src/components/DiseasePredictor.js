import React, { useState } from 'react';
import axios from 'axios';

const DiseasePredictor = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const symptomList = symptoms.split(',').map(s => s.trim());

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        symptoms: symptomList
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error fetching prediction:', error);
      setResult({ error: 'Failed to fetch prediction. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      {/* Added left and right margins to create space from the main page */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6" style={{ marginLeft: '20px', marginRight: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'green', textAlign: 'center', paddingTop: '20px' }}>
          DISEASE SPECIFIC GUIDE & SELF CARE PLAN
        </h2>

        {/* Box with the same height as the heading */}
        <div className="flex justify-center items-center">
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4" style={{ height: '200px' }}>
              <textarea
                className="w-full border border-gray-300 rounded resize-none"
                rows="4"  // Adjusted the vertical height
                style={{
                  minHeight: '100px',    // Ensuring a good height
                  width: '100%',          // Ensuring full width of the container
                }}
                placeholder="Enter symptoms separated by commas (e.g., itching, skin_rash, vomiting)"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />

              {/* Button with Inline Styles (Red Button) */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#e53e3e',  // Tailwind red-600 color
                    color: 'white',              // White text color
                    fontWeight: '600',           // Semi-bold font
                    padding: '12px 24px',        // Padding
                    borderRadius: '8px',         // Rounded corners
                    cursor: 'pointer',          // Pointer cursor
                    transition: 'background-color 0.3s ease',  // Smooth hover transition
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#c53030'}  // On hover
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e53e3e'}  // On mouse leave
                >
                  Predict
                </button>
              </div>
            </form>
          </div>
        </div>

        {result && (
          <div className="bg-gray-100 p-4 rounded-md space-y-4 text-gray-800">
            {result.error ? (
              <p className="text-red-600 text-center">{result.error}</p>
            ) : (
              <>
                <p><strong style={{ color: 'green' }}>Disease:</strong> <span style={{ color: 'black' }}>{result.predicted_disease}</span></p>
                <p><strong style={{ color: 'green' }}>Description:</strong> <span style={{ color: 'black' }}>{result.description}</span></p>
                <p><strong style={{ color: 'green' }}>Symptoms:</strong> <span style={{ color: 'black' }}>{result.symptoms.join(', ')}</span></p>
                <p><strong style={{ color: 'green' }}>Medications:</strong> <span style={{ color: 'black' }}>{result.medications.join(', ')}</span></p>
                <p><strong style={{ color: 'green' }}>Precautions:</strong> <span style={{ color: 'black' }}>{result.precautions.join(', ')}</span></p>
                <p><strong style={{ color: 'green' }}>Diet:</strong> <span style={{ color: 'black' }}>{result.diet.join(', ')}</span></p>
                <p><strong style={{ color: 'green' }}>Workout Tips:</strong> <span style={{ color: 'black' }}>{result.workout.join(', ')}</span></p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePredictor;
