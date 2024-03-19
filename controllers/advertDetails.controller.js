const { JSONResponse } = require('../helper/helpers')
const Jobs = require('../models/job-board.model')
const db = require('mongoose')
const responseCode = require('../config/response_code');

exports.advertInfoByAdvertId = async (req, res) => {
	try{
		const adverts = await Jobs.aggregate([
			{
				$lookup: {
					from: "companies",
					localField: "companyID",
					foreignField: "_id",
					as: "company"
				}
			},
			{
				$match:{"_id": new db.Types.ObjectId(req.params.id)}
			}
		])
		JSONResponse.success(res, 'Success.', adverts, responseCode.OK)
	}catch(error){
		JSONResponse.error(res, "Fauliure handling company model.", error, responseCode.INTERNAL_SERVER_ERROR)
	}
}