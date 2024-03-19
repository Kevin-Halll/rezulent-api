const { JSONResponse } = require('../helper/helpers')
const Jobs = require('../models/job-board.model')
const db = require('mongoose')

/**
 * ### Description
 * Get all Jobs
 */
exports.getAllJobs = async (req, res) => {
	try {
		const jobs = await Jobs.find()
        JSONResponse.success(res, 'Success.', jobs, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling jobs model.", error, 500)
	}
}

exports.getJobById = async (req, res) => {
	try {
		const job = await Jobs.findById({_id:req.params.id})
        JSONResponse.success(res, 'Success.', job, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling jobs model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an Job
 */
exports.createJob = async (req, res) => {
	try {
		const job = await Jobs.create(req.body)
		JSONResponse.success(res, 'Success.', job, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling jobs model.", error, 500)
	}
}
exports.updateJob = async (req, res) => {
	try {
		const job = await Jobs.findByIdAndUpdate({_id:req.params.id},req.body)
		JSONResponse.success(res, 'Success.', job, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling jobs model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting Jobs from list
 */
exports.deleteJobById = async (req, res) => {
	try {
		const job = await Jobs.findById(req.params.id)
		if (job) await Jobs.delete()
		JSONResponse.success(res, 'Success.', job, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling jobs model.', error, 500)
	}
}
