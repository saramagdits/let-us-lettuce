// Receive current month
// Request relevant produce from Produce API
// Receive current produce
// Send current produce to recipe controller
// Send current produce to UI controller

// TODO maybe try moving the produceSchema and SeasonalProduce into the class Produce. or google how to use mongoose model inside of a class
const mongoose = require('mongoose');
const produceSchema = new mongoose.Schema({month: String, monthString: String, produce: [String]});
const SeasonalProduce = mongoose.model('SeasonalProduce', produceSchema);

class Produce {
	constructor() {
		this.print = 'Hello from the produce class';
		this.produceData = [
			{
				month: '0',
				monthString: 'january',
				produce: ['acorn squash', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'kale', 'leek', 'mushroom', 'parsnip', 'rutabaga', 'swiss chard', 'turnip']
			},
			{
				month: '1',
				monthString: 'february',
				produce: ['acorn squash', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'kale', 'leek', 'mushroom', 'parsnip', 'rutabaga', 'swiss chard', 'turnip']
			},
			{
				month: '2',
				monthString: 'march',
				produce: ['acorn squash', 'artichoke', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'leek', 'lettuce', 'mushroom', 'parsnip', 'radish', 'rutabaga']
			},
			{
				month: '3',
				monthString: 'april',
				produce: ['artichoke', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'leek', 'lettuce', 'mushroom', 'parsnip', 'radish', 'rhubarb', 'rutabaga', 'spring peas', 'zucchini']
			},
			{
				month: '4',
				monthString: 'may',
				produce: ['artichoke', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'celery', 'spring peas', 'swiss chard', 'zucchini']
			},
			{
				month: '5',
				monthString: 'june',
				produce: ['artichoke', 'asparagus', 'beet', 'bok choy', 'cabbage', 'carrot', 'celery', 'corn', 'cucumber', 'eggplant', 'lettuce', 'okra', 'summer squash', 'swiss chard', 'tomato', 'zucchini']
			},
			{
				month: '6',
				monthString: 'july',
				produce: ['beet', 'bell pepper', 'bok choy', 'cabbage', 'carrot', 'celery', 'corn', 'cucumber', 'eggplant', 'green bean', 'lettuce', 'okra', 'summer squash', 'swiss chard', 'tomato', 'zucchini']
			},
			{
				month: '7',
				monthString: 'august',
				produce: ['acorn squash', 'beet', 'bell pepper', 'bok choy', 'butternut squash', 'cabbage', 'carrot', 'celery', 'corn', 'cucumber', 'eggplant', 'green bean', 'lettuce', 'mushroom', 'okra', 'summer squash', 'swiss chard', 'tomato', 'zucchini']
			},
			{
				month: '8',
				monthString: 'september',
				produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'brussels sprouts', 'butternut squash', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant', 'green bean', 'lettuce', 'mushroom', 'okra', 'pumpkin', 'spinach', 'summer squash', 'sweet potato', 'swiss chard', 'tomato']
			},
			{
				month: '9',
				monthString: 'october',
				produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'broccoli', 'brussels sprouts', 'butternut squash', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant', 'leek', 'lettuce', 'mushroom', 'okra', 'parsnip', 'pumpkin', 'rutabaga', 'spinach', 'summer squash', 'sweet potato', 'swiss chard', 'tomato', 'winter squash']
			},
			{
				month: '10',
				monthString: 'november',
				produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrots', 'cauliflower', 'celery', 'corn', 'cucumber', 'mushroom', 'okra', 'parsnip', 'pumpkin', 'rutabaga', 'spinach', 'sweet potato', 'tomato', 'winter squash']
			},
			{
				month: '11',
				monthString: 'december',
				produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'broccoli', 'cabbage', 'carrot', 'cauliflower', 'celery', 'lettuce', 'mushroom', 'parsnip', 'rutabaga', 'sweet potato', 'winter squash']
			}
		];
	}

	populateDB() {

		// SeasonalProduce.create(this.produceData, (err, addedProduce) => {
		// 	if (err) {console.log(err)}
		// });
		// this.produceData.forEach(produceMonth => {
		// 	SeasonalProduce.save(produceMonth, err => console.log(err))
		// })
		// Use insertMany for inserting large batches of data
		SeasonalProduce.insertMany(this.produceData, function (err) {
			console.log(err)
		});
	};
	// Returns an array of produce
	// getProduce(month) {
	// 	let produceData = SeasonalProduce.find({ month: month }, (err, data) => {
	// 		if (err) { return err}
	// 			else { produceData =  data }
	// 	});
	// 	return produceData;
	// }
	queryProduce(month){
		// This works, needs to be handled asynchronously by produce route
		// TODO add error handling
		return SeasonalProduce.find({month: month}, (err, docs) => {return docs});
	}
}

module.exports = Produce;