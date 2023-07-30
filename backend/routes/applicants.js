const express = require('express')

const Applicant = require('../models/ApplicantModel')
const router = express.Router()
const {
    createApplicant,
    getApplicants,
    getSingleApplicant,
    deleteApplicant,
    updateApplicant
} = require('../controllers/applicantController')

//Get all applicants
router.get('/',getApplicants)

//Get single applicant
router.get('/:id',getSingleApplicant)

//Post an applicant
router.post('/',createApplicant)

//Delete an applicants
router.delete('/:id',deleteApplicant)

//Patch all applicants
router.patch('/:id',updateApplicant)



module.exports = router