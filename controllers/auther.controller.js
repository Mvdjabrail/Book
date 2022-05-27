const Auther = require("../models/Auther.model");

module.exports.autherController = {
  postAuther: (req, res) => {
    Auther.create({
      name: req.body.name,
      autherdiscription: req.body.autherdiscription,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при добавлении автора");
      });
  },
  deleteAuther: (req, res) => {
    Auther.findByIdAndRemove(req.params.id),
      then(() => {
        res.json("Автор удален");
      }).catch(() => {
        res.json("Ошибка при удалении автора");
      });
  },
};
