const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function() {
  this.enemies.push(new Enemy('ur mom', 'high heel'));
  this.enemies.push(new Enemy('pete davidson', 'mk-47'));
  this.enemies.push(new Enemy('augusto pinochet ugarte', 'rocket launcher'));

  this.currentEnemy = this.enemies[0];

  inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  .then(({name}) => {
    this.player = new Player(name);

    this.startNewBattle();
  });
};

Game.prototype.startNewBattle = function() {
  if(this.player.agility > this.currentEnemy.agility) {
    this.isPlayerTurn = true;
  } else {
    this.isPlayerTurn = false;
  }

  console.log('Your stats are as follows:');
  console.table(this.player.getStats());

  console.log(this.currentEnemy.getDescription());

  this.battle();
};

Game.prototype.battle = function() {
  if (this.isPlayerTurn) {
    inquirer.prompt({
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
      choices: ['Attack', 'Use potion']
    }).then(({action}) => {
      if (action === 'Use potion') {

      } else {
        const damage = this.player.getAttackValue();
        this.currentEnemy.reduceHealth(damage);

        console.log(`You attacked the ${this.currentEnemy.name}!`);
        console.log(this.currentEnemy.getHealth());
      }
    });

    if(true) {
      console.log(this.player.getInventory());
    }
  } else {
    const damage = this.currentEnemy.getAttackValue();
    this.player.reduceHealth(damage);

    console.log(`You were attacked by the ${this.currentEnemy.name}!`);
    console.log(this.player.getHealth());
  }
};

module.exports = Game;