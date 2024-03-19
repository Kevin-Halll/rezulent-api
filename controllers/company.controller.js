const { JSONResponse } = require('../helper/helpers')
const Company = require('../models/company.model')
const db = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * ### Description
 * Get all company
 */
exports.getAllCompanies = async (req, res) => {
	try {
		const company = await Company.find()
		company.forEach(comp => {
			comp.password = undefined;
		})
        JSONResponse.success(res, 'Success.', company, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling company model.", error, 500)
	}
}
/**
 * ### Description
 * Get all adverts posted by respective companies
 */
exports.getCompanyById = async (req, res) => {
	try {
		const company = await Company.findById({_id:req.params.id})
		company.password = undefined;
        JSONResponse.success(res, 'Success.', company, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling company model.", error, 500)
	}
}

/**
 * ### Description
 * Creating a company
 */
exports.createCompnay = async (req, res) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 12)
		const company = await Company.create(req.body)
		company.password = undefined
		JSONResponse.success(res, 'Success.', company, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling company model.", error, 500)
	}
}
exports.updateCompany = async (req, res) => {
	try {
		if(req.body.password){
			return req.body.password = await bcrypt.hash(req.body.password, 12)
		}
		const company = await Company.findByIdAndUpdate({_id:req.params.id},req.body)
		company.password = undefined;
		JSONResponse.success(res, 'Success.', company, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling company model.", error, 500)
	}
}

/**
 * ### Description
 * Deleting Company from list
 */
exports.deleteCompanyById = async (req, res) => {
	try {
		const company = await Company.findById({_id:req.params.id})
		company.password = undefined;
		if (company) await company.delete()
		JSONResponse.success(res, 'Success.', company, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling delete of company model.', error, 500)
	}
}

exports.compnayLogin = async (req, res) => {
	try {
		const company = await Company.findOne({email:req.body.email})
		if(company && await bcrypt.compare(req.body.password, company.password)){
			const token = jwt.sign({email: company.email}, process.env.JWT_SECRET)
			company.password = undefined
			return JSONResponse.success(res, 'Success.', {token, company}, 200)
		}
		else{
			JSONResponse.error(res, "Failure handling company model. checkpass didnt work", error, 500)
		}
	} catch (error) {
		JSONResponse.error(res, "Failure handling company model.", error, 500)
	}
}