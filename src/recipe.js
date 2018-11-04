class Recipe {
	constructor() {
		this.print = 'Hello from the recipe class'
	}

	queryRecipes (ingredients) {
		return fetch(`http://localhost:3000/recipes?ing=${ingredients}`)
				.then(res => res.json().then(data => {return data}))
				.catch(err => console.log(err));
	}
}

export {Recipe};