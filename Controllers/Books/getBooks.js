const BookModel = require("../../Models/Book");

const getBooks = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skipping = limit * (page - 1);

  try {
    const books = await BookModel.find(req.query).skip(skipping).limit(limit);

    res.json({ books });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getBooks;
