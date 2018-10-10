const express = require('express');
const router = express.Router();

const loginView = require('../views/api/login')
const registView = require('../views/api/regist')
const headerView = require('../views/api/header')

router.post('/login', loginView.login)
router.post('/regist', registView.regist)
router.post('/header', headerView.header)

module.exports = router;
