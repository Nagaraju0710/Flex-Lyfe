



const express = require('express')
const { PostModel } = require('../model/post.model')
const cors = require('cors')
const allPostRouter = express.Router()
allPostRouter.use(cors());


// post post

// postRouter.use(auth)



// Get posts

// Get all posts

allPostRouter.get('/', async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log('posts',posts)
        res.status(200).send(posts)
    } catch (err) {
        res.send({ "Error": err })
    }
})


// patch

allPostRouter.patch("/all/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id
    console.log(id)
    console.log(req.body)
    try {
        const post = await PostModel.findOne({ _id: id })
        if (post.name == req.body.name) {
            await PostModel.findByIdAndUpdate(id, payload)
            res.status(200).send({ "msg": "post updated" })
        } else {
            res.status(400).send({ "msg": "You are not authorize" })
        }
    } catch (err) {
        res.status(400).send({ "msg": "post not found" })
    }
})

// delete



module.exports = { allPostRouter }