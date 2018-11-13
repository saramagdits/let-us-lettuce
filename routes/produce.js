const express = require('express');
const router = express.Router();
const Produce = require('../modules/produce');
const produce = new Produce();

// Makes a request for produce
router.get('/', (req, res) => {
	// Get month from query string
	const month = req.query.month;
	// Get produce using produce model
	// getProduce returns a promise
	produce.queryProduce(month).then(results => {return res.send(results[0])});
});

module.exports = router;