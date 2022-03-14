const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

const Player = require('../lib/Player');
const { expect } = require('@jest/globals');

test('creates a player object', () => {
  const player = new Player('kier');

  expect(player.name).toBe('kier');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("gets player's stats as an onject", () => {
  const player = new Player('kier');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () => {
  const player = new Player('kier');
  
  expect(player.getInventory()).toEqual(expect.any(Array));
  
  player.inventory = [];
  
  expect(player.getInventory()).toEqual(false);
});

test("gets player's health value", () => {
  const player = new Player('kier');

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is alive or not', () => {
  const player = new Player('kier');

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
  const player = new Player('kier');
  const oldHealth = player.health;
  
  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);
  
  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});

const player = new Player('kier');