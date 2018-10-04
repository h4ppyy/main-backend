var express = require('express');
var router = express.Router();
var sampleView = require('../views/sample/sample')

router.get('/', sampleView.sample)

module.exports = router;
