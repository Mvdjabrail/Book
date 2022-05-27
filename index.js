const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(require("./routes/book.route"));
app.use(require("./routes/genre.route"));
app.use(require("./routes/review.route"));
app.use(require("./routes/auther.route"));

mongoose
  .connect("mongodb+srv://mvdjabrail:1221@cluster0.5s8s8.mongodb.net/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(3000, () => {
  console.log("Сервер запущен");
});
