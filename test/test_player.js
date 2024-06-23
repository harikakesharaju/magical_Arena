const assert = require('assert');
const Player = require('../src/player');

describe('Player', () => {
    it('should initialize correctly', () => {
        const player = new Player(50, 5, 10);
        assert.strictEqual(player.health, 50);
        assert.strictEqual(player.strength, 5);
        assert.strictEqual(player.attack, 10);
    });

    it('should be alive when health is greater than 0', () => {
        const player = new Player(50, 5, 10);
        assert.strictEqual(player.isAlive(), true);
    });

    it('should not be alive when health is 0 or less', () => {
        const player = new Player(0, 5, 10);
        assert.strictEqual(player.isAlive(), false);
    });
});
