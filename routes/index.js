const express = require('express');
const router = express.Router();
// Serve the static index.html page
router.get('/', (req, res) => {
	res.sendFile('index.html');
});

module.exports = router;