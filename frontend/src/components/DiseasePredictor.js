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

  const renderList = (list) => {
    if (Array.isArray(list) && list.length > 0) {
      return list.join(', ');
    }
    return 'No data available.';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'green', textAlign: 'center', paddingTop: '20px' }}>
          DISEASE SPECIFIC GUIDE & SELF CARE PLAN
        </h2>

        <div className="flex justify-center items-center">
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4" style={{ height: '200px' }}>
              <textarea
                className="w-full border border-gray-300 rounded resize-none"
                rows="4"
                style={{ minHeight: '100px', width: '100%' }}
                placeholder="Enter symptoms separated by commas (e.g., itching, skin_rash, vomiting)"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#e53e3e',
                    color: 'white',
                    fontWeight: '600',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#c53030'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e53e3e'}
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
                <p><strong style={{ color: 'green' }}>Description:</strong> <span style={{ color: 'black' }}>{result.description || 'No description available.'}</span></p>
                <p><strong style={{ color: 'green' }}>Symptoms:</strong> <span style={{ color: 'black' }}>{renderList(result.symptoms)}</span></p>
                <p><strong style={{ color: 'green' }}>Medications:</strong> <span style={{ color: 'black' }}>{renderList(result.medications)}</span></p>
                <p><strong style={{ color: 'green' }}>Precautions:</strong> <span style={{ color: 'black' }}>{renderList(result.precautions)}</span></p>
                <p><strong style={{ color: 'green' }}>Diet:</strong> <span style={{ color: 'black' }}>{renderList(result.diet)}</span></p>
                <p><strong style={{ color: 'green' }}>Workout Tips:</strong> <span style={{ color: 'black' }}>{renderList(result.workout)}</span></p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePredictor;
