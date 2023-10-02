



const express = require('express')
const { PostModel } = require('../model/post.model')
const { auth } = require('../middleware/auth.middleware')
const cors = require('cors')
const postRouter = express.Router()
postRouter.use(cors());


// post post

postRouter.use(auth)

postRouter.post("/add", async (req, res) => {
    const payload = req.body
    const token = req.headers.authorization
    console.log(req.body, token)
    try {
        const post = new PostModel(payload)
        await post.save()
        res.status(200).send({ "msg": "A new post has been added" })
    } catch (err) {
        res.status(400).send({ "Error": err })
    }
})

// Get post

postRouter.get('/', async (req, res) => {
    try {
        const posts = await PostModel.find({ name: req.body.name })
        res.status(200).send(posts)
    } catch (err) {
        res.send({ "Error": err })
    }
})

// patch

postRouter.patch("/update/:id", async (req, res) => {
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

postRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const post = await PostModel.findOne({ _id: id })
        if (post.name == req.body.name) {
            await PostModel.findByIdAndDelete(id)
            res.status(200).send({ "msg": "post has been successfully deleted" })
        } else {
            res.status(400).send({ "msg": "You are not authorize" })
        }
    } catch (err) {
        res.status(400).send({ "msg": "post not found" })
    }
})

module.exports = { postRouter }