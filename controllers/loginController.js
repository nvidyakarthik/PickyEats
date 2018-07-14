const db = require("../models");

// Defining methods for the booksController
module.exports = {

  createUser: function(req, res) {
    console.log(req.body);
    db.Login
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
 