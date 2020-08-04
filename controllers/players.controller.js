const Player = require('../models/Player')

exports.findPLayers = (req, res, next) => {
  Player.find()
    .then(players => res.render('players/all', {
      players
    }))
    .catch(err => res.render('players/all', err))
}