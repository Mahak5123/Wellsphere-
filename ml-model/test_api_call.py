import requests

url = 'http://127.0.0.1:5000/predict'

data = {
    "symptoms": ["itching", "skin_rash", "vomiting"]
}

response = requests.post(url, json=data)

print("Status Code:", response.status_code)
print("Response:", response.json())
