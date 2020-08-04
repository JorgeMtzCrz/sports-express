const express = require('express');
const router = express.Router();
const {
  findSports
} = require('../controllers/sports.controller')
const {
  findTeams
} = require('../controllers/team.controller')
const {
  findPLayers
} = require('../controllers/players.controller')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Get sports page
router.get('/sports', findSports)

//Get teams page
router.get('/teams', findTeams)

//Get player page
router.get('/players', findPLayers)

module.exports = router;