const Player = require('./player');
const Arena = require('./arena');

// Create players
const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

// Create arena
const arena = new Arena(playerA, playerB);

// Start the fight
arena.fight();
