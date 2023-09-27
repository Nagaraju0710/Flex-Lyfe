



const express = require('express')
const { UserModel } = require('../model/user.model')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const userRouter = express.Router()
require('dotenv').config()
userRouter.use(cors());

const bcrypt = require('bcrypt')

// Register

userRouter.post("/register", async (req, res) => {
    const { name, email, gender, pass } = req.body
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            const user = new UserModel({ name, email, gender, pass: hash })
            await user.save()
            res.status(200).send({ "msg": "A new user registered" })
        })
    } catch (err) {
        console.log("Error:", err)
    }

})

// Login

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    // console.log('login post request')
    const user = await UserModel.findOne({ email })
    if (!user) {
        res.status(400).send({ "msg": "user not found" })
        return
    }

    try {
        bcrypt.compare(pass, user.pass, async (err, result) => {
            if (result) {
                const token = jwt.sign({userId: user._id, name: user.name}, process.env.SECRET_KEY)
                res.status(200).send({ "msg": "Login successfully", token,name: user.name })
            } else {
                res.status(400).send({ "Error": err })

            }
        })
    } catch (err) {
        console.log("Error:", err)
    }

})

module.exports = { userRouter }