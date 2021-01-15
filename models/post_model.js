const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
	{
		username: String,
		profileImg: String,
		postImg: String,
		caption: String,
		likes: Array,
	},
	{ timestamps: true }
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post
