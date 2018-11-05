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
	removeAllSelectedStyling () {
		document.querySelectorAll('.selected').forEach(produce => {produce.classList.remove('selected')});
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
			let content = document.createElement('div');
			content.classList.add('alert','alert-success');
			content.role = 'alert';
			content.innerHTML = alertMsg;
			this.recipeContainer.insertBefore(content, this.recipeList);
		}
		else if (type === 'error') {
			let content = document.createElement('div');
			content.classList.add('alert','alert-danger');
			content.role = 'alert';
			content.innerHTML = alertMsg;
			this.recipeContainer.insertBefore(content, this.recipeList);
		}
	}
	clearAlerts () {
		document.querySelectorAll('.alert').forEach(alert => alert.remove());
	}
	clearRecipes () {
		while (this.recipeList.firstChild) {
			this.recipeList.removeChild(this.recipeList.firstChild);
		}
	}
}

export {UI};