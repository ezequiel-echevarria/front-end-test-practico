var express = require('express');
var router = express.Router();
var apiController = require('../controller/apiController');
var itemsController = require('../controller/itemsController');

router.get('/status', apiController.status);

router.get('/items', itemsController.search);

router.get('/items/:id', itemsController.getDetails);

module.exports = router;
