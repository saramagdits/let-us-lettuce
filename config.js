module.exports = {
	// env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	db: {
		uri: 'mongodb://localhost:3000/',
	}
};