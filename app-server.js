// Needs to:
// Serve static files, scripts, images ect
// Receive current month, and return relevant produce

// =======================
// Requirements
// =======================
const express = require('express');
const config = require('./config.js');
const app = express();
const port = config.port;
const mongoose = require('mongoose');
const Produce = require('./modules/produce');
// =======================
// Configuration
// =======================
app.set('view engine', 'ejs');
app.use(express.static('public'));

// =======================
// Database Connection
// =======================
mongoose.connect('mongodb://localhost/test_database');

// =======================
// Routes
// =======================

// Import routes
const index = require('./routes/index');
const recipes = require('./routes/recipes');

// Homepage
app.use('/', index);
// Make a request to Recipe Puppy
app.use('/recipes', recipes);

// =======================
// Populate Database
// =======================
// Uncomment and run once when needed
// const produce = new Produce;
// produce.populateDB();

// =======================
// Listener for port 3000
// =======================
app.listen(port, () => console.log(`App listening on port ${port}`));
