const assert = require('assert');
const Dice = require('../src/dice');

describe('Dice', () => {
    it('should roll a value between 1 and 6', () => {
        const dice = new Dice();
        for (let i = 0; i < 100; i++) {
            const roll = dice.roll();
            assert(roll >= 1 && roll <= 6);
        }
    });
});
