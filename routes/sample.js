const express = require('express');
const router = express.Router();

const connectionTestView = require('../views/sample/connectionTest')
const sampleView = require('../views/sample/sample')

router.get('/connectionTest', connectionTestView.connectionTest)
router.get('/', sampleView.sample)

module.exports = router;
