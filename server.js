const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const booksRouter = require("./routers/books.router");

app.use(bodyParser.json());
app.use(booksRouter);

app.listen(4000, () => {
	console.log("Server running at port 4000.");
});
