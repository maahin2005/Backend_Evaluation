const { Router } = require("express");
const getAllReviews = require("../Controllers/Reviews/getAllReviews");
const authUser = require("../Middleware/auth");

const reviewRoutes = Router();

reviewRoutes.get("/", authUser, getAllReviews);

module.exports = reviewRoutes;
