const BookModel = require("../../Models/Book");

const getBooks = async (_, res) => {
  try {
    const books = await BookModel.find();

    res.json({ books });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getBooks;
