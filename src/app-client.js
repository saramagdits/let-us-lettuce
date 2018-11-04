// TODO Have dietary restriction modifiers (checkbox: vegetarian?)
// init()

// Import modules
import {Month} from './month.js';
import {Produce} from './produce.js';
import {ProduceSelector} from './produce-selector';
import {Recipe} from './recipe.js';
import {UI} from './ui.js';

// Instantiate classes
const month = new Month();
const produce = new Produce();
const produceSelector = new ProduceSelector();
const recipe = new Recipe();
const ui = new UI();

// Event listeners
document.addEventListener('DOMContentLoaded', getAndDisplayProduce);
// document.querySelector('#searchRecipesBtn').addEventListener('click', getAndDisplayRecipes);
document.querySelector('.produceList').addEventListener('click', produceClicked);
document.querySelector('#searchRecipesBtn').addEventListener('click', searchAndDisplayRecipes);
document.querySelector('#clearSelectedProduceBtn').addEventListener('click', clearSelectedProduce);
// Console.log tests
console.log(month.print);
console.log(produce.print);
console.log(recipe.print);
console.log(ui.print);
console.log(produceSelector.print);

// Request the current produce and display on the page
function getAndDisplayProduce () {
	// Request the user's current month
	const currentMonth = month.queryMonth();
	// Make a request to the produce API for the current month. This returns a promise
	produce.queryProduce(currentMonth)
			// Make a request to Recipe API for the current produce
		.then(produceResults => {ui.displayProduce(produceResults)});
}

// To be removed..
function getAndDisplayRecipes (e) {
	e.preventDefault();
	recipe.queryRecipes('okra')
			.then(recipeResults => ui.displayRecipes(recipeResults));
}

// Handles the produce target being clicked
function produceClicked (e) {
	e.preventDefault();
	// Drill down to select the targeted produce
	let targetProduceName = '';
	// Check if the item clicked was a produce item
	if (e.target.classList.contains('produce-link')) {
		// Set target produce to the clicked produce
		targetProduceName = e.target.dataset.name;
		// Check if the produce was already selected
		if (produceSelector.checkProduce(targetProduceName)) {
			// If it was already selected:
			// Remove the produce from the selected produce array
			produceSelector.deselectProduce(targetProduceName);
			// Have the UI remove the selection styling
			ui.removeSelectedStyling(e.target);
		} else {
			// If it was NOT already selected:
			// Check if the produce array contains the max 4 items
			if (produceSelector.checkProduceLength() === 4) {
				// If it already contains the max 4 items:
				console.log('there are 4 things!');
				// Have the UI show an alert, telling the user they reached max, and should deselect something to continue
				ui.showAlert('Only 4 vegetables may be selected', 'error');
			} else {
				// If it does NOT contain the max 4 items:
				// Add the target produce to the selected produce array using produceSelector.selectProduce()
				console.log('there are not 4 things');
				produceSelector.selectProduce(targetProduceName);
				console.log(produceSelector.checkProduceLength());
				// Have the UI add the selection styling
				ui.addSelectedStyling(e.target);
			}
		}
	}



}

// Handles the 'search' btn being clicked. Checks the selected produce array before making a request to the Recipe API, and displaying the results via the UI
function searchAndDisplayRecipes (e) {
	e.preventDefault();
	// Check if the produce array contains <= 4 items
		// If it contains <= 4 items:
			// Have the UI remove selection styling from all produce
			// Stringify the array
			// Send the array to recipe.queryRecipes
			// Receive the recipe results and pass them to UI.displayRecipes
		// If it contains 0 items:
			// Have the UI show an alert that tells the user they must select at least 1 vegetable to get results
}

// Clears the selection styling for selected produce, as well as removing them from the selected produce array
function clearSelectedProduce (e) {
	e.preventDefault();
	// Have the UI remove selected styling from any produce in the array
	// Have the produce-selector clear the selected produce array
}
