// Date should be a class
class Month {
	constructor() {
		this.print = 'hello from date class';
	}

	// Returns the current month (0-9)
	queryMonth () {
		return new Date().getUTCMonth();
	}
}

export {Month};