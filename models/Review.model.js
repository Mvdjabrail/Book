const mongoose = require("mongoose");

const reviewShema = mongoose.Schema({
  name: String,
  author: String,
  book: {
    ref: "Book",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewShema);

module.exports = Review;
