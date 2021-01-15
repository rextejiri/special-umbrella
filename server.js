// DEPENDENCIES //
const express = require("express")
const mongoose = require("mongoose")

// CONFIGURATION //
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

app.use(express.json())
app.use(express.static("public"))

//add controllers
const homeController = require("./controllers/home_controller.js")
app.use("/home", homeController)

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
	console.log("mongo connected: ", MONGODB_URI)
)
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"))

app.get("/", (req, res) => {
	res.send("Hello World")
})

// LISTENER //
app.listen(PORT, () => {
	console.log("listening on port", PORT)
})
