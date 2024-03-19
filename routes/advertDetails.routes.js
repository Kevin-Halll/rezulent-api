const express = require('express');
const router = express.Router();
const adverts = require('../controllers/advertDetails.controller');

router.route('/:id').get(adverts.advertInfoByAdvertId);

module.exports = router;