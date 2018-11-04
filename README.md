To Start the App

1. Compile with webpack
npm run build

2. Start MongoDb server
sudo service mongod start     TO STOP: (sudo service mongod stop) TO RESTART: (sudo service mongod restart)
TO ENTER MONGO SHELL: (mongo) (Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.)

3. Before running for the first time, populate the database by uncommenting the populate database section in app-server.js.

4. Start Node server *If running for the first time, be sure to comment out the populate database section after complete
node app-server.js

