const express = require('express')
const router = express.Router()

const{
    getMessages,
    getSingleMessage,
    postMessage,
    deleteMessage

} = require('../controllers/messageController')

router.get('/',getMessages)

router.get('/:id',getSingleMessage)

router.post('/',postMessage)

router.delete('/:id', deleteMessage)

module.exports = router