const BookModel = require("../../Models/Book");

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await BookModel.findByIdAndDelete(id);

    res.status(202).json({ msg: "Book deleted successfully", deletedBook });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = deleteBook;
