const mongoose = require("mongoose");

const bookShema = mongoose.Schema({
  name: String,
  autherId: {
    ref: "Auther",
    type: mongoose.SchemaTypes.ObjectId,
  },
  genreId: {
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Book = mongoose.model( "Book", bookShema);

module.exports = Book;
