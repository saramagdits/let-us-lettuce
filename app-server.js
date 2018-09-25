// Needs to:
// Serve static files, scripts, images ect
// Receive current month, and return relevant produce
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Serve the static index.html page
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

// Serve the test response data back to the client
app.get('/test', (req, res) => {res.json('hello from the test request!')});

app.listen(port, () => console.log(`App listening on port ${port}`));
