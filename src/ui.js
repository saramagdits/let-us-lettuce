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

	displayProduce (produce) {
		let content = '';
		produce.produce.forEach(produceItem => {
			content += `<li>${produceItem}</li>`;
		});
		this.produceList.innerHTML = content;
		// console.log(produce);
	}

	displayRecipes (recipes) {
		let content = '';
		recipes.hits.forEach(recipe => {
			content += `<li>${recipe.recipe.label}</li>`;
		});
		this.recipeList.innerHTML = content;
	}
}

export {UI};