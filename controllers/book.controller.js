const Book = require("../models/Book.model");

module.exports.bookController = {
  postBook: (req, res) => {
    Book.create({
      name: req.body.name,
      autherId: req.body.autherId,
      genreId: req.body.genreId,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при добавлении книги");
      });
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch(() => {
        res.json("Ошибка при удалении книги");
      });
  },
  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.is, {
      name: req.params.name,
      autherId: req.params.autherId,
      genreId: req.params.genreId,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при изменении книги");
      });
  },
  getBookById: (req, res) => {
    Book.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выведении книги по Id");
      });
  },
  getBook: (req, res) => {
    Book.find()
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выведении всех книг");
      });
  },
  getBookByIdGenre: (req, res) => {
    Book.find({ genreId: req.params.id })
      .populate('genreId')
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выведении книги из определенного жанра");
      });
  },
};
