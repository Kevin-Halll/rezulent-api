const { JSONResponse } = require('../helper/helpers');
const Applicant = require('../models/applicant.model');
const response_code = require('../config/response_code');


exports.application = async (req, res) => {
	try {
        if(req.file){
            req.body.resume = req.file.path
        }
		const applicant = await Applicant.create(req.body)
		JSONResponse.success(res, 'Success.', applicant, response_code.OK)
	} catch (error) {
		JSONResponse.error(res, "Failure handling applicant model.", error, response_code.INTERNAL_SERVER_ERROR)
	}
}

exports.getAllApplicants = async (req, res) => {
	try {
		const applicant = await Applicant.find()
        JSONResponse.success(res, 'Success.', applicant, response_code.OK)
	} catch (error) {
		JSONResponse.error(res, "Failure handling applicant model.", error, response_code.INTERNAL_SERVER_ERROR)
	}
}

exports.getApplicantById = async (req, res) => {
	try {
		const applicant = await Applicant.findById({_id:req.params.id})
		JSONResponse.success(res, 'Success.', applicant, response_code.OK)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling applicant model.', error, response_code.INTERNAL_SERVER_ERROR)
	}
}

