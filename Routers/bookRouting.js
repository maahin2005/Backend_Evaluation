const { Router } = require("express");
const getBooks = require("../Controllers/Books/getBooks");
const createBook = require("../Controllers/Books/createBook");
const authUser = require("../Middleware/auth");
const deleteBook = require("../Controllers/Books/deleteBook");
const updateBook = require("../Controllers/Books/updateBook");
const verifyAuthor = require("../Middleware/verifyAuthor");

const bookRoutes = Router();

bookRoutes.get("/", authUser, getBooks);
bookRoutes.post("/create", authUser, createBook);
bookRoutes.patch("/update/:id", authUser, verifyAuthor, updateBook);
bookRoutes.delete("/delete/:id", authUser, verifyAuthor, deleteBook);

module.exports = bookRoutes;
