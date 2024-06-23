const assert = require('assert');
const Player = require('../src/player');
const Arena = require('../src/arena');

describe('Arena', () => {
    it('should simulate a fight and declare a winner', () => {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(100, 10, 5);
        const arena = new Arena(playerA, playerB);

        arena.fight();
        assert(playerA.isAlive() !== playerB.isAlive());
    });
});
