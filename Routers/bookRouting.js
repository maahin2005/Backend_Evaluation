const { Router } = require("express");
const getBooks = require("../Controllers/Books/getBooks");
const createBook = require("../Controllers/Books/createBook");

const bookRoutes = Router();

bookRoutes.get("/", getBooks);
bookRoutes.post("/create", createBook);

module.exports = bookRoutes;
