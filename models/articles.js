var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: String,
  summary: String,
  url: String
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;