const express = require('express')
const router = express.Router()
const jobs = require('../controllers/jobs.controller')

router.route('/')
.get(jobs.getAllJobs)
.post(jobs.createJob)

router.route('/:id')
.get(jobs.getJobById)
.patch(jobs.updateJob)

module.exports = router
