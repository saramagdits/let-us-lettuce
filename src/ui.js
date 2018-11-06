// TODO would be cool to have the relevant produce from each recipe highlighted, so the user can see at a glance which ingredients are seasonal

class UI {
	constructor() {
		this.print = 'Hello from the UI class';
		// Selectors
		this.produceContainer = document.querySelector('#produce-container');
		this.produceList = document.querySelector('.produceList');
		this.recipeContainer = document.querySelector('#recipe-container');
		this.recipeList = document.querySelector('.recipeList');
	}

	// Receive produce results and display them on the page as clickable tiles
	displayProduce(produce) {
		let content = '';
		produce.produce.forEach(produceItem => {
			content += `<li><a href='#' class='produce-link' data-name='${produceItem}'>${produceItem}<img src='images/${produceItem.replace(/\s/g, '')}-sm.jpg'></a></li>`;
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
	toggleSelected(produce) {
		produce.classList.toggle('selected');
	}

	removeAllSelectedStyling() {
		document.querySelectorAll('.selected').forEach(produce => {
			produce.classList.remove('selected')
		});
	}

	// Receive recipe results and display them on the page as cards
	displayRecipes(recipes) {
		let content = '';
		recipes.hits.forEach(recipe => {
			let badges = '';
			badges += recipe.recipe.healthLabels.map(label => {
				return `<span class='badge badge-info'>${label}</span>`
			}).reduce((a, b) => a + b);
			content += `<div class='card recipe-card'>
  									<img class='card-img-top' src='${recipe.recipe.image}' alt='${recipe.recipe.label}'>
										<div class='card-body'>
											<h5 class='card-title'>${recipe.recipe.label}</h5>
											<p class='card-text'>${badges}</p>
											<a href='${recipe.recipe.url}' class='btn btn-primary'>${recipe.recipe.source}</a>
										</div>
									</div>`;
		});
		this.recipeList.innerHTML = content;
	}

	// Display a success or error alert, with custom text
	showAlert(alertMsg, type) {
		if (type === 'success') {
			let content = document.createElement('div');
			content.classList.add('alert', 'alert-success');
			content.role = 'alert';
			content.innerHTML = alertMsg;
			this.recipeContainer.insertBefore(content, this.recipeList);
		}
		else if (type === 'error') {
			let content = document.createElement('div');
			content.classList.add('alert', 'alert-danger');
			content.role = 'alert';
			content.innerHTML = alertMsg;
			this.recipeContainer.insertBefore(content, this.recipeList);
		}
	}

	clearAlerts() {
		document.querySelectorAll('.alert').forEach(alert => alert.remove());
	}

	clearRecipes() {
		while (this.recipeList.firstChild) {
			this.recipeList.removeChild(this.recipeList.firstChild);
		}
	}
}

export {UI};