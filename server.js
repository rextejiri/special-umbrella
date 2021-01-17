// DEPENDENCIES //
const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")

// CONFIGURATION //
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

app.use(express.json())
app.use(express.static("public"))

app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: false,
	})
)

//add controllers
const homeController = require("./controllers/home_controller.js")
app.use("/home", homeController)

// const userController = require("./controllers/user_controllers.js")
// app.use("/user", userController)

// const sessionController = require("./controllers/sessions.js")
// app.use("/session", sessionController)

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})

mongoose.connection.on("error", (err) =>
	console.log(
		err.message,
		"is mongod not running/Problem with atlas connection?"
	)
)
mongoose.connection.on("connected", () =>
	console.log("mongo connected: 🧞‍♂️🧞‍♂️🧞‍♂️", MONGODB_URI)
)
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"))

// app.get("/", (req, res) => {
// 	res.send("Hello World")
// })

app.get("/", (req, res) => {
	res.redirect("/home")
})

// LISTENER //
app.listen(PORT, () => {
	console.log("listening on port🧞‍🧞‍♂️🧞‍♂️🧞‍♂️♂️", PORT)
})
