// Receive current month
// Request relevant produce from Produce API
// Receive current produce
// Send current produce to recipe controller
// Send current produce to UI controller

class Produce {
	constructor() {
		this.print = 'Hello from the produce class';
	}
	getProduce (month) {
		return fetch(`http://localhost:3000/produce?month=${month}`, {method: 'GET'})
				.then(res => {return res.json()})
				.then(data => {return data})
				.catch(err => console.log(err));
	}
}

export {Produce};