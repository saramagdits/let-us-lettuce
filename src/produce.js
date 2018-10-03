class Produce {
	constructor() {
		this.print = 'Hello from the produce class';
		this.produceData = [
				{month: 'january', produce: ['acorn squash', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'kale', 'leek', 'mushroom', 'parsnip', 'rutabaga', 'swiss chard', 'turnip']},
				{month: 'february', produce: ['acorn squash', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'kale', 'leek', 'mushroom', 'parsnip', 'rutabaga', 'swiss chard', 'turnip']},
				{month: 'march', produce: ['acorn squash', 'artichoke', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'leek', 'lettuce', 'mushroom', 'parsnip', 'radish', 'rutabaga']},
				{month: 'april', produce: ['artichoke', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'cauliflower', 'celery', 'leek', 'lettuce', 'mushroom', 'parsnip', 'radish', 'rhubarb', 'rutabaga', 'spring peas', 'zucchini']},
				{month: 'may', produce: ['artichoke', 'asparagus', 'beet', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrot', 'celery', 'spring peas', 'swiss chard', 'zucchini']},
				{month: 'june', produce: ['artichoke', 'asparagus', 'beet', 'bok choy', 'cabbage', 'carrot', 'celery', 'corn', 'cucumber', 'eggplant', 'lettuce', 'okra', 'summer squash', 'swiss chard', 'tomato', 'zucchini']},
				{month: 'july', produce: ['beet', 'bell pepper', 'bok choy', 'cabbage', 'carrot', 'celery', 'corn', 'cucumber', 'eggplant', 'green bean', 'lettuce', 'okra', 'summer squash', 'swiss chard', 'tomato', 'zucchini']},
				{month: 'august', produce: ['acorn squash', 'beet', 'bell pepper', 'bok choy', 'butternut squash', 'cabbage', 'carrot', 'celery', 'corn', 'cucumber', 'eggplant', 'green bean', 'lettuce', 'mushroom', 'okra', 'summer squash', 'swiss chard', 'tomato', 'zucchini']},
				{month: 'september', produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'brussels sprouts', 'butternut squash', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant', 'green bean', 'lettuce', 'mushroom', 'okra', 'pumpkin', 'spinach', 'summer squash', 'sweet potato', 'swiss chard', 'tomato']},
				{month: 'october', produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'broccoli', 'brussels sprouts', 'butternut squash', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant', 'leek', 'lettuce', 'mushroom', 'okra', 'parsnip', 'pumpkin', 'rutabaga', 'spinach', 'summer squash', 'sweet potato', 'swiss chard', 'tomato', 'winter squash']},
				{month: 'november', produce: ['acorn squash', 'artichoke', 'beet', 'bell pepper', 'bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrots', 'cauliflower', 'celery', 'corn', 'cucumber', 'mushroom', 'okra', 'parsnip', 'pumpkin', 'rutabaga', 'spinach', 'sweet potato', 'tomato', 'winter squash']},
				{month: 'december', produce: ['acorn squash', 'artichoke', 'beets', 'bell pepper', 'bok choy', 'broccoli', 'cabbage', 'carrot', 'cauliflower', 'celery', 'lettuce', 'mushroom', 'parsnip', 'rutabaga', 'sweet potato', 'winter squash']}
		];
	}

	// Receive current month
	// Request relevant produce from Produce API
	// Receive current produce
	// Send current produce to recipe controller
	// Send current produce to UI controller
}

export {Produce};