const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  feedback: { type: String, required: true },
  rating: { type: Number, enum: [1, 2, 3, 4, 5], default: 4 },
});

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;
