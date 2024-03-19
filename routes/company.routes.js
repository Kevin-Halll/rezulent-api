const express = require('express')
const router = express.Router()
const company = require('../controllers/company.controller')

router.route('/').get(company.getAllCompanies)
.post(company.createCompnay)

router.route('/:id').patch(company.updateCompany)
.get(company.getCompanyById).delete(company.deleteCompanyById)

module.exports = router
