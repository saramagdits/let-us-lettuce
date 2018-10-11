// Needs to:
// Get date
// Get produce
// Get recipes
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

// API test request
// Use as base for fetching produce
fetch('http://localhost:3000/test')
// .json() returns a promise, so you need another .then()
		.then(res => res.json().then(data => {
			console.log(data)
		}))
		.catch(err => console.log(err));

// Recipe API test
// Use as base for fetching recipes
fetch('http://localhost:3000/recipes?ing=onions,garlic&p=3')
	.then(res => res.json().then(data => console.log(data)))
	.catch(err => console.log(err));
// fetch('http://www.recipepuppy.com/api/?i=onions,garlic&p=3')
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));