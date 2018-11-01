// Needs to:
// Get month DONE
// Get produce DONE
// Get recipes DONE
// Display recipes
// Have dietary restriction modifiers (checkbox: vegetarian?)
// init()

// Import modules
import {Month} from './month.js';
import {Produce} from './produce.js';
import {Recipe} from './recipe.js';
import {UI} from './ui.js';

// Instantiate classes
const month = new Month();
const produce = new Produce();
const recipe = new Recipe();
const ui = new UI();

// Event listeners
document.addEventListener('DOMContentLoaded', getAndDisplayProduce);
document.querySelector('#searchRecipesBtn').addEventListener('click', getAndDisplayRecipes);
// Console.log tests
console.log(month.print);
console.log(produce.print);
console.log(recipe.print);
console.log(ui.print);

// Request the current produce and display on the page
function getAndDisplayProduce () {
	// Request the user's current month
	const currentMonth = month.queryMonth();
	// Make a request to the produce API for the current month. This returns a promise
	produce.queryProduce(currentMonth)
			// Make a request to Recipe Puppy API for the current produce. queryProduce returns an obj, so use only the produce array
			// The produce array must be converted to a single comma separated string
	// TODO at this point, this should be passing the produce results to the UI controller to be displayed
	// 		.then(produceResults => recipe.queryRecipes(produceResults.produce.toString()))
			.then(produceResults => {ui.displayProduce(produceResults)});
			// TODO at this point, this should be passing the recipe results to the UI controller to be displayed
			// .then(recipeResults => console.log(recipeResults));
}
function getAndDisplayRecipes () {
	recipe.queryRecipes('okra')
			.then(recipeResults => ui.displayRecipes(recipeResults));
}
// Request the user's current month (0-11)
// console.log(month.queryMonth());


// Make a request to Recipe Puppy API, which returns a promise
// recipe.queryRecipes('artichoke, asparagus, beet, bok choy, cabbage, carrot, celery, corn, cucumber, eggplant, lettuce, okra, summer squash, swiss chard, tomato, zucchini').then(results => console.log(results));

// Make a request to produce API, which returns a promise.
// produce.queryProduce('1').then(results => console.log(results));