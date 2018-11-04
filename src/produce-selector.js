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

	// Clear the entire selected produce array
	clearAllProduce (e) {

	}
	checkProduceLength () {
		return this.selectedProduceList.length;
	}
}

export {ProduceSelector};