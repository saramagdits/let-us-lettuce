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
document.querySelector('.produceList').addEventListener('click', produceClicked);
document.querySelector('#searchRecipesBtn').addEventListener('click', searchAndDisplayRecipes);
document.querySelector('#clearSelectedProduceBtn').addEventListener('click', clearSelectedProduce);

// Request the current produce and display on the page
function getAndDisplayProduce() {
	const currentMonth = month.queryMonth();
	// Make a request to the produce API for the current month. This returns a promise
	produce.queryProduce(currentMonth)
	// Make a request to Recipe API for the current produce
			.then(produceResults => {ui.displayProduce(produceResults)});
}

// TODO maybe combine selectProduce and deselectProduce into toggleProduce.
// Handles the produce target being clicked
function produceClicked(e) {
	e.preventDefault();
	let produce = '';
	// Check if the item clicked was a produce item
	if (e.target.parentNode.classList.contains('produce-card') || e.target.parentNode.parentNode.classList.contains('produce-card')) {
		produce = e.target.closest('.produce-card').dataset.name;
		console.log(produce);
		if (produceSelector.checkProduce(produce)) {
			// Remove the produce from the selected produce array
			produceSelector.deselectProduce(produce);
			ui.toggleSelected(e.target.closest('.produce-card').firstElementChild);
		} else {
			if (produceSelector.checkProduceLength() === 4) {
				ui.showAlert('Only 4 vegetables may be selected', 'error');
			} else {
				// Add the produce to the selected produce array
				produceSelector.selectProduce(produce);
				ui.toggleSelected(e.target.closest('.produce-card').firstElementChild);
			}
		}
	}
}

// Handles the 'search' btn being clicked. Checks the selected produce array before making a request to the Recipe API, and displaying the results via the UI
function searchAndDisplayRecipes(e) {
	e.preventDefault();
	ui.clearAlerts();
	// Check if the produce array contains <= 4 items
	if (produceSelector.checkProduceLength() > 0) {
		ui.removeAllSelectedStyling();
		const selectedProduce = produceSelector.getSelectedProduce();
		recipe.queryRecipes(selectedProduce)
				.then(recipeResults => {
					if (recipeResults.count > 0) {
						ui.displayRecipes(recipeResults)
					} else {
						ui.showAlert('Sorry, no recipes could be found with that combination. Try again.', 'error');
					}

				});

	} else {
		ui.showAlert('You must select at least 1 vegetable', 'error');
	}
}

// TODO handle case where no relevant recipes are returned
// TODO this should clear any previous recipes?
// Clears the selection styling for selected produce, as well as removing them from the selected produce array
function clearSelectedProduce(e) {
	e.preventDefault();
	ui.clearAlerts();
	ui.clearRecipes();
	// Have the UI remove selected styling from any produce in the array
	ui.removeAllSelectedStyling();
	// Have the produce-selector clear the selected produce array
	produceSelector.clearAllProduce();
}
