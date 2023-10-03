
const jwt = require("jsonwebtoken")
require('dotenv').config()

const auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (decoded) {
                console.log('decoded',decoded)
                req.body.userId = decoded.userId
                req.body.name = decoded.name
                next()
            } else {
                res.send({ "Error": err })
            }
        })
    } else {
        res.send({ "msg": "Please login" })

    }
}

module.exports = {auth}