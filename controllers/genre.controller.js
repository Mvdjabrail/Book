const Genre = require("../models/Genre.model");

module.exports.genreController = {
  postGenre: (req, res) => {
    Genre.create({
      name: req.body.name,
      discription: req.body.discription,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("Ошибка при добавлении жанра"));
  },
  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Жанр удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении жанра");
      });
  },
  getGenre: (req, res) => {
    Genre.find()
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выведении жанра");
      });
  },
};
