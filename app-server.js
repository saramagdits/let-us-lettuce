// Needs to:
// Serve static files, scripts, images ect
// Receive current month, and return relevant produce

// =======================
// Requirements
// =======================
const express = require('express');
const app = express();
const port = 3000;

// =======================
// Configuration
// =======================
app.set('view engine', 'ejs');
app.use(express.static('public'));

// =======================
// Routes
// =======================

// Import routes
const index = require('./routes/index.js');
const test = require('./routes/test.js');

// Homepage
app.use('/', index);
// Test a request from the client
app.use('/test', test);

// =======================
// Listener for port 3000
// =======================
app.listen(port, () => console.log(`App listening on port ${port}`));
