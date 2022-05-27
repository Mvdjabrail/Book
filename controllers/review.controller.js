const Review = require("../models/review.model");

module.exports.reviewController = {
  postReviewByBook: (req, res) => {
    Review.create({
      name: req.body.name,
      author: req.body.author,
      book: req.body.book,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при добавлении рецензии ");
      });
  },
  deleteReview: (req, res) => {
    Review.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Рецензия удалена");
      })
      .catch(() => {
        res.json("Ошибка при удалении рецензии");
      });
  },
  getReview: (req, res) => {
    Review.findById({ book: req.params.book })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при выводе рецензии к определенной книге");
      });
  },
};
