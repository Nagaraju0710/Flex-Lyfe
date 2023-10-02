


const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    userId: String,
    likes: Number,
    name: String
},{versionKey: false})

const PostModel = mongoose.model('post',postSchema)

module.exports = {PostModel}