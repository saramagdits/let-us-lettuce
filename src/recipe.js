class Recipe {
	constructor() {
		this.print = 'Hello from the recipe class';
		this.config = require('./config.js');
	}

	queryRecipes (ingredients) {
		document.getElementById("recipe-container").scrollIntoView();
		return fetch(`${this.config.url}/recipes?ing=${ingredients}`)
				.then(res => res.json().then(data => {return data}))
				.catch(err => console.log(err));
	}
}

export {Recipe};