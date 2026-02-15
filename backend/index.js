import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./config/connectDB.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

/* =======================
   Body Parsers
======================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   CORS
======================= */
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);


/* =======================
   Database
======================= */
connectDB();

/* =======================
   Routes
======================= */
app.use("/api/auth", authRoutes);

/* =======================
   Health Check
======================= */
app.get("/", (req, res) => {
  res.json({ message: "PashuLens Backend Running 🚀" });
});

/* =======================
   Server
======================= */
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
