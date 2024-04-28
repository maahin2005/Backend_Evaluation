const BookModel = require("../../Models/Book");

const createBook = async (req, res) => {
  const { title, price, userID, author } = req.body;

  try {
    const newBook = new BookModel({ title, price, userID, author });

    newBook.save();

    res.status(200).json({ msg: "New Book saved successfully", newBook });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = createBook;
