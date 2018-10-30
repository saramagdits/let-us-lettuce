const express = require('express');
const router = express.Router();
const Produce = require('../modules/produce');
const produce = new Produce();

// Makes a request for produce
// TODO something wrong here with json parsing, or something wrong with produce module data type
// TODO it looks like getProduce() returns a giant mongoose model.Query instead of results
// I think there is an async problem, where we are console.logging the produce results before they are actually returned
router.get('/', (req, res) => {
	// Get month from query string
	const month = req.query.month;
	// Get produce using produce model
	// getProduce returns a promise
	const produceData = produce.getProduce(month).then(results => {return res.send(results[0])});
});

module.exports = router;