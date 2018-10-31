class Recipe {
	constructor() {
		this.print = 'Hello from the recipe class'
	}

	getRecipes (ingredients) {
		// TODO make ingredients comma separated values
		return fetch(`http://localhost:3000/recipes?ing=${ingredients}`)
				.then(res => res.json().then(data => {return data}))
				.catch(err => console.log(err));
	}

	// Receive current produce
	// Request relevant recipes
	// Receive recipes and send to UI controller
}

export {Recipe};