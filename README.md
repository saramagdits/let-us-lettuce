To Start the App

1. Create a config.js file in the root with the following. An app id and API key from the Edamam API are required to get recipe results.
    module.exports = {
        // env: process.env.NODE_ENV || 'development',
        port: process.env.PORT || {3000, OR YOUR PORT},
        db: {
            uri: 'mongodb://localhost:{3000 OR YOUR PORT}/',
        },
        apiAppId: {YOUR API APP ID},
        apiKey: {YOUR API KEY}
    };

2. Compile with webpack
npm run build

3. Start MongoDb server
sudo service mongod start     TO STOP: (sudo service mongod stop) TO RESTART: (sudo service mongod restart)
TO ENTER MONGO SHELL: (mongo) (Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.)

4. Before running for the first time, populate the database by uncommenting the populate database section in app-server.js.

5. Start Node server *If running for the first time, be sure to comment out the populate database section after complete
node app-server.js

