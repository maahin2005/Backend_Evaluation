const ReviewModel = require("../../Models/Review");

const getAllReviews = async (req, res) => {
  try {
    const allReviews = await ReviewModel.find();

    res.json({ allReviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllReviews;
