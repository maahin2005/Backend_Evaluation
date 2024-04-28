const BookModel = require("../../Models/Book");

const getBooks = async (req, res) => {
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skipping = limit * (page - 1);
  const query = req.query;
  let API = BookModel.find(query);

  if (req.query.page || req.query.limit) {
    API = BookModel.find();
  }

  try {
    const totalBooks = await BookModel.find();
    const booksLength = totalBooks.length;
    const books = await API.skip(skipping).limit(limit);
    const totalPages = Math.ceil(booksLength / limit);

    res.json({
      totalBooks: booksLength,
      totalPages,
      bookPerPage: +limit,
      data: books,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = getBooks;
// tp = 11/2 = 6
