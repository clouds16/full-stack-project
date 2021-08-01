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


app.get("/contact", async (req, res) => {
	
	let narrow = 'meli@gmail.com'
	
	try {
		User.find({email : narrow}).then(tasks => {
			res.send(tasks)
			console.log(tasks)
		})
	} catch (e) {
		console.log(e)
	}
})


app.post("/login", async (req, res) => {
	
	console.log(req.body.email)

	try {
		User.find({email : req.body.email}).then(result => {
			res.send(result)
		})

	}catch (e) {
		res.send(408)
	}
})

app.listen(port, () => {
	console.log("Server up on port: " + port);
});
