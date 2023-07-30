const Message = require('../models/MessageModel')

const mongoose = require('mongoose')

// GET all messages
const getMessages = async (req,res)=>{
    const messages = await Message.find({}).sort({createdAt: -1})

    res.status(200).json(messages)
}

// GET a single message
const getSingleMessage = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json(message)
    }

    const message = await Message.findById(id)
    if (!message) {
        res.status(400).json({mssg: 'Böyle bir mesaj bulunamadı!'})
    }
    
    res.status(200).json(message)
}

// POST a message
const postMessage = async (req, res) => {
    const {
        name,
        email,
        message
    } = req.body

    try {
        const textMessage = await Message.create({
            name,
            email,
            message})
        res.status(200).json(textMessage)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a message
const deleteMessage = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"Böyle bir mesaj bulunamadı"})
    }

    const message = await Message.findOneAndDelete({_id: id})
    if(!message){
        res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }
    res.status(200).json(message)
}

module.exports = {
    getMessages,
    getSingleMessage,
    postMessage,
    deleteMessage
}