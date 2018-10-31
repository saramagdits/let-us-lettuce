const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');
const apiAppId = config.apiAppId;
const apiKey = config.apiKey;

// Serve the test response data back to the client
router.get('/', (req, res) => {
	const ingredients = req.query.ing;
	// console.log(ingredients);
	request(`https://api.edamam.com/search?q=${ingredients}&app_id=${apiAppId}&app_key=${apiKey}`, function (error, response, body) {
		console.log('statusCode for edamam request:', response && response.statusCode); // Print the response status code if a response was received
		if (error === null && response.statusCode === 200){
			res.send(body);
		} else if (error) {
			console.log(error)
		}
	});
});
module.exports = router;