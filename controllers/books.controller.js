const booksModel = require("../models/books.model");

function getAll(req, res) {
	const sql = "SELECT * FROM books;";
	const params = [];
	booksModel.all(sql, params, (error, rows) => {
		if (error) {
			return res.status(400).json({ error: error.message });
		}

		return res.json({
			status: "success",
			message: null,
			data: rows
		});
	});
}

function getBookById(req, res) {
	const id = req.params.id;
	const sql = `SELECT * FROM books where id=${id};`;
	const params = [];
	booksModel.get(sql, params, (error, row) => {
		if (error) {
			return res.status(400).json({ error: error.message });
		}

		if (!row) {
			return res.status(404).json({
				status: "error",
				message: `The book with id ${id} could not be found.`,
				data: null
			});
		}

		return res.json({
			status: "success",
			message: null,
			data: row
		});
	});
}

function createBook(req, res) {
	const data = req.body;
	const sql = `INSERT INTO books (title, author, genre) VALUES ('${data.title}', '${data.author}', '${data.genre}');`;
	const params = [];
	booksModel.get(sql, params, error => {
		if (error) {
			return res.status(400).json({ error: error.message });
		}

		return res.json({
			status: "success",
			message: null,
			data: null
		});
	});
}

function updateBook(req, res) {
	const data = req.body;
	const id = req.params.id;
	const sql = `UPDATE books SET title='${data.title}', author='${data.author}', genre='${data.genre}' WHERE id=${id};`;
	const params = [];
	booksModel.get(sql, params, error => {
		if (error) {
			return res.status(400).json({ error: error.message });
		}

		return res.json({
			status: "success",
			message: null,
			data: null
		});
	});
}

function deleteBookById(req, res) {
	const id = req.params.id;
	const sql = `DELETE FROM books where id=${id};`;
	const params = [];
	booksModel.get(sql, params, (error, row) => {
		if (error) {
			return res.status(400).json({ error: error.message });
		}

		return res.json({
			status: "success",
			message: null,
			data: null
		});
	});
}

module.exports = {
	getAll,
	getBookById,
	createBook,
	updateBook,
	deleteBookById
};
