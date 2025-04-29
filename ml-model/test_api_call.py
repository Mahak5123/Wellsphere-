import requests

url = 'http://127.0.0.1:5000/predict'

data = {
    "symptoms": ["Dengue", "skin_rash", "chills", "joint_pain", "vomiting"]
}

response = requests.post(url, json=data)

print("Status Code:", response.status_code)
try:
    print("Response:", response.json())
except Exception as e:
    print("Error parsing JSON:", e)
    print("Response Text:", response.text)
