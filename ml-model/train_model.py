import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load your dataset (make sure the .csv files are in the same directory as this script)
df = pd.read_csv("Training.csv")

# Split the data into features (X) and target labels (y)
X = df.drop(columns=["prognosis"])  # Features (symptoms)
y = df["prognosis"]  # Target (disease)

# Split the data into training and testing sets (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Random Forest classifier
clf = RandomForestClassifier()

# Train the model
clf.fit(X_train, y_train)

# Save the trained model to a .pkl file
joblib.dump(clf, "RandomForest.pkl")

print("✅ Model trained and saved as RandomForest.pkl")
