var Articles = require("../models/articles");

module.exports = {
  // This method handles retrieving all saved Articles from the db
  find: function(req, res) {
    Articles.find({}, function(err, docs) {
        if (err) {
            return res.send(err);
        }
        res.json(docs);
    });
  },
  // This method handles creating new Articles
  save: function(req, res) {
    var newArticle = new Articles({
        title: req.body.title,
        date: req.body.date,
        summary: req.body.summary,
        url: req.body.url
    });
    newArticle.save(function(err) {
        if (err) {
            return res.send(err);
        }
        res.json(newArticle);
    });
  },
  // This method handles deleting Articles
  destroy: function (req, res) {
    Articles.findByIdAndRemove(req.query.id, function (err) {
      if (err) {
          return res.send(err);
      }
      res.sendStatus(204);
    });
  }
};