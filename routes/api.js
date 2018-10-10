const express = require('express');
const router = express.Router();

const loginView = require('../views/api/login')
const registView = require('../views/api/regist')

router.post('/login', loginView.login)
router.post('/regist', registView.regist)

module.exports = router;
