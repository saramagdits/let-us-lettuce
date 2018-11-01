// TODO would be cool to have the relevant produce from each recipe highlighted, so the user can see at a glance which ingredients are seasonal

class UI {
	constructor() {
		this.print = 'Hello from the UI class';
		// Selectors
		this.produceContainer = document.querySelector('#produceContainer');
		this.produceList = document.querySelector('.produceList');
	}

	displayProduce (produce) {
		let content = '';
		produce.produce.forEach(produceItem => {
			content += `<li>${produceItem}</li>`;
		});
		this.produceList.innerHTML = content;
		// console.log(produce);
	}

	// Receive recipe date from API to display
}

export {UI};