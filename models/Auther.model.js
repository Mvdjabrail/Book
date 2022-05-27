const mongoose = require("mongoose");

const autherShema = mongoose.Schema({
  name: String,
  autherdiscription: String,
});

const Auther = mongoose.model("Auther", autherShema);

module.exports = Auther;
 