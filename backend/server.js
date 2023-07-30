const express = require("express")
require('dotenv').config()
var cors = require('cors');
const mongoose = require("mongoose")

const applicantRoutes = require('./routes/applicants')
const messageRoutes = require('./routes/messages')


//express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/api/applicants', applicantRoutes )
app.use('/api/messages',messageRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        //listen for request
        app.listen(process.env.PORT, () =>{
        console.log("Connect to db & listening on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })      

