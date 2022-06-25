const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character {
  constructor(name = '') {
    super(name);

    this.inventory = [new Potion('health'), new Potion()];
  } 
  
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }
  
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }
  
  addPotion(potion) {
    this.inventory.push(potion);
  }
<<<<<<< HEAD
};

Player.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function(potion) {
  this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
    }
};

module.exports = Player;
=======
  
  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];
    
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}
    
module.exports = Player;
>>>>>>> 2a8251dd70c7dcf7dd95602bd1b7ff2e99068997
