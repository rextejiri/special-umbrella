const express = require("express")
const home = express.Router()
// const User = require("../models/user_model.js")
const Post = require("../models/post_model.js")

// const isAuthenticated = (req, res, next) => {
// 	if (req.session.currentUser) {
// 		return next()
// 	} else {
// 		res.redirect("/session/new")
// 	}
// }

home.get("/", (req, res) => {
	Post.find({}, (err, foundPost) => {
		res.json(foundPost)
	})
})

home.post("/", (req, res) => {
	Post.create(req.body, (err, createdPost) => {
		Post.find({}, (err, foundPost) => {
			res.json(foundPost)
		})
	})
})

home.delete("/:id", (req, res) => {
	Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		Post.find({}, (err, foundPost) => {
			res.json(foundPost)
		})
	})
})

home.put("/:id", (req, res) => {
	Post.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err) {
				res.send(err)
			} else {
				Post.find({}, (err, foundpost) => {
					res.json(foundPost)
				})
			}
		}
	)
})

module.exports = home
