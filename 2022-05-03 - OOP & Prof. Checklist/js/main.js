///////////////////////////////
//       JS WAY: CH 9        //
///////////////////////////////

/*
==========================
Dogs
==========================
*/
class Dog {
  constructor(name, species, size) {
    this.name = name
    this.species = species
    this.size = size
  }
  bark () {
    if (this.size > 60) {
      return 'Grrr! Grrr!'
    } else {
      return 'Woof! Woof!'
    }
  }
}

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

/*
==========================
Character inventory
==========================
*/
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.gold = 10
    this.keys = 1
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this
            .name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold and ${this.keys} key(s)`
        );
        this.xp += bonusXP;
        this.gold += target.gold;
        this.keys += target.keys;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

/*
==========================
Account list
==========================
*/
class Account {
  constructor(name, balance) {
    this.name = name
    this.balance = 0
  }
  credit (value) {
    this.balance += value
  }
  describe () {
    console.log(`owner: ${this.name}, balance: ${this.balance}`)
  }
}

let seanAcct = new Account('Sean', 0)
let bradAcct = new Account('Brad', 0)
let georgeAcct = new Account('George', 0)

let accounts = [seanAcct, bradAcct, georgeAcct]

console.log(accounts)

seanAcct.credit(1000)
bradAcct.credit(1000)
georgeAcct.credit(1000)

seanAcct.describe()
bradAcct.describe()
georgeAcct.describe()

///////////////////////////////
//       JS WAY: CH 9        //
///////////////////////////////
/*
==========================
Stopwatch
==========================
*/
class Stopwatch {
  constructor(){
    this.duration = 0
    this.running = false
  }
  start() {
    let timeNow = new Date()
    if (this.running == true) {
      throw new Error ('Stopwatch has already started')
    } else {
      console.log('Stopwatch has started...')
      this.duration = timeNow.getTime()
      this.running = true
    }
  }
  stop() {
    let timeNow = new Date()
    if (this.running == false) {
      throw new Error ('Stopwatch has not started')
    } else {
      console.log('Stopwatch has stopped...')
      this.duration = ((timeNow.getTime() - this.duration) / 1000).toFixed(3)
      this.running = false
      console.log(`${this.duration} seconds has elapsed`)
    }
  }
  reset() {
    if (this.duration == 0) {
      throw new Error ('Stopwatch has already been reset')
    } else {
      console.log('Stopwatch has been reset...')
      this.duration = 0
      this.running = false
    }
  }
}

const sw = new Stopwatch()