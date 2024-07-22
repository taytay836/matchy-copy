/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}//empty object
//add property
animal.species = 'bear';
animal['name'] = 'Mr. Black';
//add empty array
animal.noises = [];
//print
console.log(animal)


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; ///create empty array
//add 1st element bracket
noises[0] = 'duckduckgo' //add another
noises.push('yell');
//add to beginining
noises.unshift('burp')
//add to end
noises[noises.length] = 'holler'


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;//add noise to array
animal.noises.unshift('spin');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; //create an empty animals
animals.push(animal); // add 1st animal object
//log
console.log(animals)
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
// add duck to animals
animals.push(duck);
console.log(animals)
//add 2 more animals
var cat = {
  species: 'cat',
  name: 'Whiskers',
  noises: ['meow', 'purr']
};
//2nd animal
var dog = {
  species: 'dog',
  name: 'Rex',
  noises: ['bark', 'growl']

}
//add cat and dog to animals
animals.push(cat, dog);
//print animals array
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create friends arr
var friends = [];
//get random function from mozilla
function getRandom(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  //return radom animal object
  return array[randomIndex]
}
//get random obj
var randomAnimal = getRandom(animals);
//add randon name
friends.push(randomAnimal.name);
//print
console.log(friends)
//add froends list property
animals[0].friends = friends
//print the update
console.log(animals)

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}