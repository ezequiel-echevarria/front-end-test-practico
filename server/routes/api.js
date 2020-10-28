var express = require('express');
var router = express.Router();
var apiController = require('../controller/apiController');

/* GET /api/status */
router.get('/status', apiController.status);

module.exports = router;
