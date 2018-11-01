const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');
const apiAppId = config.apiAppId;
const apiKey = config.apiKey;

// Serve the test response data back to the client
router.get('/', (req, res) => {
	const ingredients = req.query.ing;
	// TODO this is not returning any recipes because it can't find any that contain all 10+ ingredients
	// may need to be in this format: https://api.edamam.com/search?app_id=SECRET&app_key=SECRET&q=Chicken+Broth+Chicken
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