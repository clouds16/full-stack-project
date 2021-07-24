const { MongoClient, ObjectId, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "web-app";

const id = new ObjectID();
console.log(id);

MongoClient.connect(
	connectionURL,
	{ useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log("unable to connect to databse");
		}
		console.log("Successfully connected");

		const db = client.db(databaseName);
	}
);
