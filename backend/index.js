require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Feedback = require("./model/feedback");

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi, from backend..");
});

app.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    console.log(feedbacks);
    res.status(200).json(feedbacks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching feedback" });
  }
});

app.post("/feedback", async (req, res) => {
  try {
    const { name, email, feedbackType, message } = req.body;
    const newFeedback = new Feedback({ name, email, feedbackType, message });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while saving feedback" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});