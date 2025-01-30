const reviewRoutes = require("./Routes/reviewRoutes");


require("dotenv").config();
console.log("MongoDB URI:", process.env.MONGODB_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express App
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json()); // Parses incoming JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if database is connected
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
