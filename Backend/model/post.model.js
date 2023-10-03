

const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    name: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [
        {
            type: String,
        },
    ],
}, { versionKey: false })

const PostModel = mongoose.model('post', postSchema)

module.exports = { PostModel }