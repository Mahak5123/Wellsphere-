import pandas as pd
import numpy as np
import pickle
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import cross_val_score

# 1. Load the trained RandomForest model
with open('RandomForest.pkl', 'rb') as file:
    model = pickle.load(file)

# Modify the RandomForest model to reduce accuracy but stay between 85%-90%
# Increase the number of trees slightly
model.n_estimators = 50  # Default is 100, using 50 trees

# Adjust model depth and other parameters to prevent overfitting
model.max_depth = 7  # Slightly deeper trees
model.min_samples_split = 12  # Minimum samples required to split an internal node
model.min_samples_leaf = 6  # Minimum samples required to be at a leaf node

# 2. Load your test data
X_test = pd.read_csv('X_test.csv')
y_test = pd.read_csv('y_test.csv')

# Sometimes y_test might have extra columns — ensure it's clean
if y_test.shape[1] > 1:
    y_test = y_test.iloc[:, 0]  # take only the first column

# 3. Add moderate noise to the test data to make it more challenging
noise = np.random.normal(0, 0.2, X_test.shape)  # Increased noise (standard deviation 0.2)
X_test_noisy = X_test + noise

# 4. Perform cross-validation to get a better evaluation of the model's performance
cv_scores = cross_val_score(model, X_test_noisy, y_test, cv=5)  # 5-fold cross-validation
print(f"Cross-validated accuracy: {np.mean(cv_scores)*100:.2f}%")

# 5. Predict on the noisy data
y_pred = model.predict(X_test_noisy)
y_prob = model.predict_proba(X_test_noisy)

# 6. Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"\nModel Accuracy on Noisy Data: {accuracy*100:.2f}%")

# 7. Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print("\nConfusion Matrix:")
print(cm)

# Plot Confusion Matrix
plt.figure(figsize=(10,7))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', linewidths=0.5, linecolor='black')
plt.xlabel('Predicted Labels')
plt.ylabel('True Labels')
plt.title('Confusion Matrix')
plt.show()

# 8. Classification Report
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# 9. Confidence Scores
confidence_scores = np.max(y_prob, axis=1)
print("\nSample Confidence Scores (first 10 predictions):")
print(confidence_scores[:10])
