const express = require('express');
const router = express.Router();
const solarController = require('../controllers/solarController');

router.post('/data', solarController.getSolarData);

module.exports = router;
