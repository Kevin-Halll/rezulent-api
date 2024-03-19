const express = require('express')
const router = express.Router()
const applicant = require('../controllers/applicant.controller')
const upload = require('../middlewares/upload.middleware');

router.route('/').get(applicant.getAllApplicants)
.post(upload.single('resume'), applicant.application)

router.route('/:id').get(applicant.getApplicantById)

module.exports = router;
