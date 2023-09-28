const express = require('express')
const { contactModel } = require('../model/contact')


const contactRouter = express.Router()

contactRouter.get('/', async (req, res) => {

    try {
        const contact = await contactModel.find()
        res.status(200).json({ msg: 'All contact details', contact })

    } catch (err) {
        res.status(400).json({ error: err.massage })
    }
})

contactRouter.post('/post', async (req, res) => {

    try {
        const contact = new contactModel(req.body)
        await contact.save()
        res.status(200).json({ msg: 'Your Massage send successfully', contact })

    } catch (err) {
        res.status(400).json({ error: err.massage })
    }
})


module.exports = { contactRouter }