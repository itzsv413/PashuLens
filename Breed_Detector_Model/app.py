import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import models, transforms
from PIL import Image
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import io

# -----------------------------
# Setup FastAPI
# -----------------------------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Load Model Once (IMPORTANT)
# -----------------------------
MODEL_PATH = "models/breed_model.pth"
LABELS_PATH = "models/labels.txt"

with open(LABELS_PATH, "r") as f:
    classes = [line.strip() for line in f]

model = models.resnet18()
model.fc = nn.Linear(model.fc.in_features, len(classes))
model.load_state_dict(torch.load(MODEL_PATH, map_location="cpu"))
model.eval()

# -----------------------------
# Image Transform
# -----------------------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# -----------------------------
# API Endpoint
# -----------------------------
@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(image)

    # Convert raw output to probabilities
    probabilities = F.softmax(outputs, dim=1)

    # Get highest probability
    confidence, pred = torch.max(probabilities, 1)

    predicted_class = classes[pred.item()]
    confidence_score = confidence.item() * 100


    return {
    "prediction": predicted_class,
    "confidence": round(confidence_score, 2)
}

