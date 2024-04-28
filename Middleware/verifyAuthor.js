const jwt = require("jsonwebtoken");
const BookModel = require("../Models/Book");
require("dotenv").config();

const verifyAuthor = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const bookAuthor = await BookModel.findOne({ _id: id });

    const decodedMSG = jwt.verify(token, process.env.SECRET_KEY);

    if (bookAuthor.author !== decodedMSG.username) {
      return res
        .status(401)
        .json({ msg: "You are not able to Edit this Book" });
    }

    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = verifyAuthor;
