const path = require('path');

module.exports = {
	entry: './src/app-client.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	}
};