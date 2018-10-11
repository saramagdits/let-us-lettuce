// Needs to:
// Serve static files, scripts, images ect
// Receive current month, and return relevant produce

// =======================
// Requirements
// =======================
const express = require('express');
const config = require('./config.js');
const app = express();
// const port = 3000;
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
// test adding cat to db
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
// =======================
// Routes
// =======================

// Import routes
const index = require('./routes/index');
const test = require('./routes/test');
const recipes = require('./routes/recipes');

// Homepage
app.use('/', index);
// Test a request from the client
app.use('/test', test);
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
