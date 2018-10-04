const express = require('express');
const router = express.Router();

const accessTokenView = require('../views/sample/accessToken')
const connectionTestView = require('../views/sample/connectionTest')
const sampleView = require('../views/sample/sample')

router.get('/accessToken', accessTokenView.accessToken)
router.get('/connectionTest', connectionTestView.connectionTest)
router.get('/', sampleView.sample)

module.exports = router;
