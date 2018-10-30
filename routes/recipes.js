const express = require('express');
const router = express.Router();
const request = require('request');

// Serve the test response data back to the client
router.get('/', (req, res) => {
	const ingredients = req.query.ing;
	// console.log(ingredients);
	request(`http://www.recipepuppy.com/api/?i=${ingredients}&p=3`, function (error, response, body) {
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		if (error === null && response.statusCode === 200){
			res.send(body);
		} else if (error) {
			console.log(error)
		}
	});
});
module.exports = router;