const express = require('express');
const router = express.Router();

// Serve the test response data back to the client
router.get('/', (req, res) => {
	res.json('hello from the test request!')
});
module.exports = router;