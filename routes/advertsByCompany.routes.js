const express = require('express');
const router = express.Router();
const adverts = require('../controllers/advertsByCompany.controller');

router.route('/').get(adverts.allCompanyAdvertsForJobBoard);

router.route('/:id').get(adverts.allAdvertsByCompany)

module.exports = router;