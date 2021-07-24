const express = require("express");
require("./mongoose.js");
const User = require("./models/user");
const cors = require('cors');



const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.post("/?", (req, res) => {
	res.send(req.body);
});

app.post("/users", async (req, res) => {
	//using async await

	const user = new User(req.body);

	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}


});

app.post("/contact", async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.listen(port, () => {
	console.log("Server up on port - lets see if it works" + port);
});
