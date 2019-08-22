// /*

//   In order to do these exercises you'll need your newly acquired knowledge on
//   constructor functions, methods, prototypes and the `this` keyword.
//   Here's an example of an exercise:

//   TASK 0:

//   - Build an Airplane constructor that takes a name.
//   - Give airplanes the ability to take off and land.
//   - If a plane takes off, its "isFlying" property is true.
//   - If a plane lands, its "isFlying" property is false.

//   SOLUTION CODE:

//   function Airplane(name) {
//     this.name = name;
//     this.isFlying = false;
//   }
//   Airplane.prototype.takeOff = function () {
//     this.isFlying = true;
//   }
//   Airplane.prototype.land = function () {
//     this.isFlying = false;
//   }

//   HOW TO TEST OUR SOLUTION:

//   const jumbo = new Airplane('Jumbo');
//   console.log(jumbo.name)              // 'Jumbo'
//   console.log(jumbo.isFlying)          // false
//   jumbo.takeOff();
//   console.log(jumbo.isFlying)          // true
//   jumbo.land();
//   console.log(jumbo.isFlying)          // false
// */

// /*

//   // TASK 1

//   // - Build a Person Constructor that takes name and age.
//   // - Give persons the ability to greet by returning a string stating name and age.
//   // - Give persons the ability to eat edibles.
//   // - When eating an edible, it should be pushed into a "stomach" property which is an array.
//   // - Give persons the ability to poop.
//   // - When pooping, the stomach should empty.

function Person (name, age){
  this.name = name;
  this.age = age;
 
  this.stomach = []
  }

  Person.prototype.greet = function(){
    return `Hi, my name is ${this.name} , and i am ${this.age}`
  }
  Person.prototype.eatingEdibles = function(fruits){
    this.stomach.push(fruits);
    }
  Person.prototype.poop = function(){

  if (this.stomach.length > 0){
    this.stomach = [] };
  }
//   TASK 2

//   - Build a Car constructor that takes model name and make.
//   - Give cars the ability to drive a distance.
//   - By driving a car, the distance driven should be added to an "odometer" property.
//   - Give cars the ability to crash.
//   - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
//   - Give cars the ability to be repaired.
//   - A repaired car can be driven again.

  function Car(name, make){
   this.name = name;
   this.make = make;
   this.odometer = 0;
   this.hasCarCrashed = false;
  }

Car.prototype.drive = function (miles){

  this.odometer += miles;
if (this.hasCarCrashed === true){

  return `I crashed at ${this.odometer}`}

else { this.odometer += miles
  }
}
Car.prototype.crashed = function (){
  this.hasCarCrashed = true;
}
Car.prototype.repair = function (){
  this.hasCarCrashed = false;
}

const Vehicle = new Car ();

//   TASK 3

//   - Build a Baby constructor that subclasses the Person built earlier.
//   - Babies of course inherit the ability to greet, which can be strange.
//   - Babies should have the ability to play, which persons don't.
//   - By playing, a string is returned with some text of your choosing.


function Person (name, age){
  this.name = name;
  this.age = age;
  this.greet = function(){
    
    return `Hi, my name is ${this.name} , and i am ${this.age}`
  }
}
function Child(name, age, playAlot) {
  Person.call(Person, name, age);
  this.playAlot = function(playAlot){

    return `I like to play ${this.playAlot}`
   
  };
}
Child.prototype = Object.create(Person.prototype);
let thomas = new Child('Tom', 5, 'football');

//   TASK 4

//   Use your imagination and come up with constructors that allow to build objects
//   With amazing and original capabilities. Build 3 small ones, or a very
//   complicated one with lots of state. Surprise us!

function Dogs (name, breed, color){
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.dogsCard = function(dogsCard){
    return `${this.name} is a ${this.color} ${this.breed}`
  }
}

const jackie = new Dogs ("jackie", "german-shepherd", "brown");
const bingo = new Dogs ("bingo","pitbull", "black");
console.log(jackie);
console.log(jackie.dogsCard());
console.log(bingo.dogsCard());



function Nee (firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Nee.prototype.getFullName = function(firstName,lastName){
   return `${this.firstName} ${this.lastName}`;
}
const mary = new Nee('Mary','poppins');

Nee.prototype.getMaritalName = function(newLastName){
  this.lastName = newLastName;
}

console.log(mary.getFullName());

mary.getMaritalName('Drinkswater');

console.log(mary.getMaritalName('Drinkswater'));
// */

// /*

//   STRETCH TASK

//   Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
//   In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
//   At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

//   Each constructor function has unique properties and methods that are defined in their block comments below:
// */

// /*
//   === GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */

// /*
//   === CharacterStats ===
//   * healthPoints
//   * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//   * should inherit destroy() from GameObject's prototype
// */

// /*
//   === Humanoid (Having an appearance or character resembling that of a human.) ===
//   * team
//   * weapons
//   * language
//   * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//   * should inherit destroy() from GameObject through CharacterStats
//   * should inherit takeDamage() from CharacterStats
// */

// /*
//   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//   * Instances of CharacterStats should have all of the same properties as GameObject.
// */

// // Test you work by un-commenting these 3 objects and the list of console logs below:

// /*
//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });
//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });
//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });
//   console.log(mage.createdAt); // Today's date
//   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//   console.log(swordsman.healthPoints); // 15
//   console.log(mage.name); // Bruce
//   console.log(swordsman.team); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// */
