'use strict';

function getFavorites(req, res) {
  let knex = require('../../knex.js');
  knex('favorites')
    .orderBy('user_id')
    .then((faves) => {
      res.status(200).json(faves);
    })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    // knex.destroy();
  })
}

function addFavorite(req, res) {
  let knex = require('../../knex.js');
  knex('favorites')
    .insert({
      user_id: 1,
      recipe_id: req.body.recipe_id,
      month: req.body.month
    }, '*')
    .then((favorites) => {
      res.send(favorites[0]);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      // knex.destroy();
    })
}

module.exports = {
  getFavorites: getFavorites,
  addFavorite: addFavorite
}
