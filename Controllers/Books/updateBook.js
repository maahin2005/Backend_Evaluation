const BookModel = require("../../Models/Book");

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { userID } = req.body;
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, {
      userID,
    });

    res
      .status(203)
      .json({ msg: "Book has been updated successfully", updatedBook });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = updateBook;
