class ProduceSelector {
	constructor() {
		this.print = 'Hello from the produce selector class';
		this.selectedProduceList = [];
	}
	// Check if target produce already belongs to array
	checkProduce (targetProduce) {
		return this.selectedProduceList.includes(targetProduce);
	}

	// Add produce to selected produce array
	selectProduce (targetProduce) {
		this.selectedProduceList.push(targetProduce);
	}

	// Remove specific produce from selected produce array
	deselectProduce (targetProduce) {
		const index = this.selectedProduceList.indexOf(targetProduce);
		// console.log(index);
		this.selectedProduceList.splice(index, 1);
	}

	toggleProduce (targetProduce) {

	}

	// Clear the entire selected produce array
	clearAllProduce () {
		// This method is safer than simply setting the array to [], because that would create an entirely new array, thus not impacting existing references to the array
		this.selectedProduceList.length = 0;
	}

	// Returns the number of items in the selected produce array
	checkProduceLength () {
		return this.selectedProduceList.length;
	}

	// Returns the list of selected produce in string format
	getSelectedProduce () {
		return this.selectedProduceList.toString();
	}
}

export {ProduceSelector};