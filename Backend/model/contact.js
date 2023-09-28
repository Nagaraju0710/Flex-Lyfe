const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: { type: String, },
    email: { type: String, },
    mobile: { type: String, },
    date: { type: String, },
    massage: { type: String }
},
    { versionKey: false }
)

const contactModel = mongoose.model('contact', contactSchema)

module.exports = { contactModel }