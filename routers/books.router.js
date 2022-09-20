const express = require("express");

const booksController = require("../controllers/books.controller");
const booksRouter = express.Router();

booksRouter.get("/books/", booksController.getAll);

booksRouter.get("/books/:id", booksController.getBookById);

booksRouter.post("/books/", booksController.createBook);

booksRouter.put("/books/:id", booksController.updateBook);

booksRouter.delete("/books/:id", booksController.deleteBookById);

module.exports = booksRouter;
