const mongoose = require('mongoose')
const Player = require('../models/Player')
const Team = require('../models/Team')
const Sport = require('../models/Sport')

const sport = [{
    name: 'Baseball',
    description: 'King of sports, le duela a quien le duela',
    ballSize: 'small',
    players: 9
  },
  {
    name: 'Soccer',
    description: 'Odiame más',
    ballSize: 'medium',
    players: 22
  }
]

const teams = [{
    name: 'Red Sox',
    league: 'Major League'
  },
  {
    name: 'FC Barcelona',
    league: 'La Liga'
  }
]

const players = [{
    firstName: 'David',
    lastName: 'Ortiz',
    alias: 'Big Papi',
    age: 43
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    alias: 'La Pulga, (D10S)',
    age: 32
  }
]

mongoose.connect('mongodb://localhost/sports', {
  useNewUrlParser: true
})

const createSport = Sport.create(sport)
const createTeams = Team.create(teams)
const createPlayers = Player.create(players)

Promise.all([createSport, createPlayers, createTeams])
  .then(results => {
    console.log(results)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
    mongoose.connection.close()
  })