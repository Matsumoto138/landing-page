const mongoose = require('mongoose')

const Schema = mongoose.Schema

const applicantSchema=new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    linkedinProfile:{
        type: String,
        required: true
    },
    school:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Applicant',applicantSchema)