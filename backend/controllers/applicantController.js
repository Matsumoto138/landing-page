const Applicant = require('../models/ApplicantModel')
const mongoose = require('mongoose')

// get all applicants
const getApplicants = async (req,res) => {
    const applicants = await Applicant.find({}).sort({createdAt: -1})

    res.status(200).json(applicants)
}

// get a single applicant
const getSingleApplicant = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }

    const applicant = await Applicant.findById(id)
    if(!applicant){
        res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }

    res.status(200).json(applicant)
}

// create new applicant
const createApplicant = async (req,res) =>{
        const { name, 
            email, 
            phoneNumber, 
            linkedinProfile, 
            school, 
            job, 
            experience } = req.body

    try{
        const applicant = await Applicant.create({ name, 
            email, 
            phoneNumber, 
            linkedinProfile, 
            school, 
            job, 
            experience })
        res.status(200).json(applicant)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete an applicant
const deleteApplicant = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }
    const applicant = await Applicant.findOneAndDelete({_id: id})
    if(!applicant){
        res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }
    res.status(200).json(applicant)

}

// update an application
const updateApplicant = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }
    const applicant = await Applicant.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!applicant){
        res.status(404).json({mssg:"Böyle bir aday bulunamadı"})
    }
    res.status(200).json(applicant)
}

module.exports = {
    createApplicant,
    getApplicants,
    getSingleApplicant,
    deleteApplicant,
    updateApplicant
}