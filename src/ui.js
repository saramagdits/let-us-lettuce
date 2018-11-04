// TODO would be cool to have the relevant produce from each recipe highlighted, so the user can see at a glance which ingredients are seasonal

class UI {
	constructor() {
		this.print = 'Hello from the UI class';
		// Selectors
		this.produceContainer = document.querySelector('#produceContainer');
		this.produceList = document.querySelector('.produceList');
		this.recipeContainer = document.querySelector('#recipeContainer');
		this.recipeList = document.querySelector('.recipeList');
	}

	// Receive produce results and display them on the page as clickable tiles
	displayProduce (produce) {
		let content = '';
		produce.produce.forEach(produceItem => {
			content += `<li><a href='#' class='produce-link' data-name='${produceItem}'>${produceItem}<img src='images/${produceItem.replace(/\s/g, "")}.jpg'></a></li>`;
		});
		this.produceList.innerHTML = content;
		// console.log(produce);
	}
	//  Give the produce styling to signify it has been selected
	// addSelectedStyling (produce) {
	// 	produce.classList.add('selected');
	// }
	//  Remove the selected styling for one or more produce
	// removeSelectedStyling (produce) {
	// 	produce.classList.remove('selected');
	// }
	toggleSelected (produce) {
		produce.classList.toggle('selected');
	}
	removeAllSelectedStyling (produceArray) {
		produceArray.forEach(produce => produce.classList.remove('selected'));
	}

	// Receive recipe results and display them on the page as cards
	displayRecipes (recipes) {
		let content = '';
		recipes.hits.forEach(recipe => {
			content += `<li>
										<a href='${recipe.recipe.url}'>${recipe.recipe.label}</a>
										<i>${recipe.recipe.source}</i>
										<img src='${recipe.recipe.image}'>
									</li>`;
		});
		this.recipeList.innerHTML = content;
	}

	// Display a success or error alert, with custom text
	showAlert (alertMsg, type) {
		if (type === 'success') {
			// If alert type is success
			// Display green alert with alertMsg as inner text
			console.log(alertMsg);
		}
		else if (type === 'error') {
			// If alert type is error
			console.log(alertMsg);
			// Display red alert with alertMsg as inner text
		}
	}
}

export {UI};