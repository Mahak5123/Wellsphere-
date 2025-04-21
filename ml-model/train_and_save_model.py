import pandas as pd
import numpy as np
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Load training data
df = pd.read_csv('Training.csv')

# Prepare features and target
X = df.drop(columns=['prognosis'])
y = df['prognosis']

# Train-test split (optional but useful)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save the trained model
with open('RandomForest.pkl', 'wb') as f:
    pickle.dump(model, f)

print("✅ Model trained and saved as RandomForest.pkl")

# Save X_test and y_test for future validation or testing
X_test.to_csv('X_test.csv', index=False)
y_test.to_csv('y_test.csv', index=False)
print("✅ X_test and y_test saved")
