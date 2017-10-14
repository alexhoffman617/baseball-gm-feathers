const players = require('./players/players.service.js');
const seasons = require('./seasons/seasons.service.js');
const leagues = require('./leagues/leagues.service.js');
const teams = require('./teams/teams.service.js');
const games = require('./games/games.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(players);
  app.configure(seasons);
  app.configure(leagues);
  app.configure(teams);
  app.configure(games);
};
