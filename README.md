# 🐄 PashuLens – AI Powered Breed Detection System

PashuLens is a full-stack AI web application that detects cattle and buffalo breeds from images using a deep learning model.  
It provides real-time predictions along with confidence scores through a clean and responsive user interface.

---

## 🚀 Features

- 🖼 Upload livestock image
- 🤖 AI-based breed prediction (ResNet18)
- 📊 Confidence score using Softmax probability
- ⚡ FastAPI backend for model inference
- 🎨 Modern React UI with drag-and-drop support
- 📱 Fully responsive design
- 🔐 Structured API integration
- 🧠 Real-time detection results

---

## 🏗 Tech Stack

### Frontend
- React (Vite + TypeScript)
- Axios
- Tailwind CSS
- Lucide Icons

### ML_Model
- FastAPI
- Uvicorn
- PyTorch
- Torchvision
- Pillow

### Model
- ResNet18 (Fine-tuned)
- Custom trained breed classification model
- Softmax confidence scoring

---

## 📂 Project Structure

```
PashuLens/
│
├── frontend
|   | src/
│   | ├── api/
|   | ├──components/
|   | ├──styles/
|   | ├──App.tsx
|   | ├──index.css
|   | └──main.tsx
|   ├─index.html
│   └── package.json
|
├──backend/
|    ├──config/
|    ├──controllers/
|    ├──middleware/
|    ├──models/
|    ├──routes/
|    ├──.env
|    ├──index.js
|    └──package.json
│
├── Breed_Detector_Model/
│   ├── app.py
│   ├── models/
│   │   ├── breed_model.pth
│   │   └── labels.txt
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ How To Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/itzsv413/PashuLens.git
cd PashuLens
```

---

### 2️⃣ ML_Model Setup

```bash
cd Breed_Detector_Model
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python -m uvicorn app:app --reload
```

ML_Model runs on:
```
http://127.0.0.1:8000
```

---
### 3️⃣ backend Setup

```bash
cd backend
npm install
npm run dev
```

backend runs on:
```
✅ Server running on http://localhost:5000
MongoDB is connected
```

---

### 4️⃣ Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:3000
```

---

## 🔍 API Endpoint

### POST `/predict`

Uploads an image and returns prediction with confidence.

### Response Example:

```json
{
  "prediction": "Holstein",
  "confidence": 43.33%
}
```

---

## 🧠 How It Works

1. User uploads image.
2. Image is sent to FastAPI backend.
3. Image is preprocessed (224x224 resize + tensor conversion).
4. ResNet18 model performs inference.
5. Softmax converts logits into probability distribution.
6. Highest probability class is selected.
7. Prediction + confidence returned to UI.

---

## 🎯 Future Improvements

- Top-3 predictions
- Confidence threshold warning
- Prediction history storage
- Breed information database integration
- Cloud deployment
- Docker containerization

---

## 📸 Demo

<img width="959" height="419" alt="image" src="https://github.com/user-attachments/assets/4b80183e-f47e-433c-babf-c50066a5b1be" />


---

## 👨‍💻 Author

Sachin Vishwakarma    

---

## ⭐ If You Like This Project

Give it a star ⭐ on GitHub!
