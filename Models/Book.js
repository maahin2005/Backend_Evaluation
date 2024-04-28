const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: String, default: 4.9 },
  userID: { type: String },
  username: { type: String },
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
