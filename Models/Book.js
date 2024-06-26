const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: String, default: 4.9 },
  userID: { type: String },
  author: { type: String },
  feedback: { type: String },
  rating: { type: Number },
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
