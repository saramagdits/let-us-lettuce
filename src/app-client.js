// Needs to:
// TODO Get date
// Get produce DONE
// Get recipes DONE
// Display recipes
// Have dietary restriction modifiers (checkbox: vegetarian?)
// init()

// Import modules
import {Date} from './date.js';
import {Produce} from './produce.js';
import {Recipe} from './recipe.js';
import {UI} from './ui.js';

// Instantiate classes
const date = new Date();
const produce = new Produce();
const recipe = new Recipe();
const ui = new UI();

// Event listeners

// Console.log tests
console.log(date.print);
console.log(produce.print);
console.log(recipe.print);
console.log(ui.print);

// Make a request to Recipe Puppy API, which returns a promise
recipe.getRecipes('eggplant, tomato').then(results => console.log(results));

// Make a request to produce API, which returns a promise.
produce.getProduce('june').then(results => console.log(results));