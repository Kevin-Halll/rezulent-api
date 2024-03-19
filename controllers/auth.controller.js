const response_code = require('../config/response_code');
const { JSONResponse } = require('../helper/helpers');
const Company = require('../models/company.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.companayLogin = async (req, res) => {
	try {
		const company = await Company.findOne({email:req.body.email})
		if(company && await bcrypt.compare(req.body.password, company.password)){
			const token = jwt.sign({email: company.email}, process.env.JWT_SECRET)
			company.password = undefined
            company.about_company = undefined
            company.phone_number = undefined
            company.address = undefined
			return JSONResponse.success(res, 'Success.', {token, company}, response_code.OK)
		}
		else{
			JSONResponse.error(res, "Invalid Credentials.", {}, response_code.INTERNAL_SERVER_ERROR)
		}
	} catch (error) {
		console.log(error);
		JSONResponse.error(res, "Failure to login.", error, response_code.INTERNAL_SERVER_ERROR)
	}
}