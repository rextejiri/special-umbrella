const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    username: String,
    text: String,
    img: String,
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post
