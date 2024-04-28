const { Router } = require("express");
const getBooks = require("../Controllers/Books/getBooks");
const createBook = require("../Controllers/Books/createBook");
const authUser = require("../Middleware/auth");
const deleteBook = require("../Controllers/Books/deleteBook");
const updateBook = require("../Controllers/Books/updateBook");

const bookRoutes = Router();

bookRoutes.get("/", getBooks);
bookRoutes.post("/create", authUser, createBook);
bookRoutes.delete("/delete/:id", authUser, deleteBook);
bookRoutes.patch("/update/:id", authUser, updateBook);

module.exports = bookRoutes;
