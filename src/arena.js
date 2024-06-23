const Dice = require('./dice');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
        this.dice = new Dice();
    }

    fight() {
        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            this.takeTurn();
        }

        if (this.playerA.isAlive()) {
            console.log('Player A wins!');
        } else {
            console.log('Player B wins!');
        }
    }

    takeTurn() {
        const attacker = this.playerA.health <= this.playerB.health ? this.playerA : this.playerB;
        const defender = attacker === this.playerA ? this.playerB : this.playerA;

        const attackRoll = this.dice.roll();
        const defendRoll = this.dice.roll();

        const attackDamage = attacker.attack * attackRoll;
        const defendStrength = defender.strength * defendRoll;

        const damage = Math.max(0, attackDamage - defendStrength);
        defender.health -= damage;

        console.log(`${attacker === this.playerA ? 'Player A' : 'Player B'} attacks!`);
        console.log(`Attack roll: ${attackRoll}, Damage: ${attackDamage}`);
        console.log(`Defend roll: ${defendRoll}, Strength: ${defendStrength}`);
        console.log(`Damage dealt: ${damage}`);
        console.log(`Player A health: ${this.playerA.health}`);
        console.log(`Player B health: ${this.playerB.health}`);
        console.log('-------------------------------------');
    }
}

module.exports = Arena;
