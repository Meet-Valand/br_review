const express = require("express");
const Review = require("../Models/Review");
const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  const { rating, reviewText } = req.body;

  if (!rating || !reviewText) {
    return res.status(400).json({ message: "Rating and review text are required!" });
  }

  try {
    const newReview = new Review({ rating, reviewText });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
