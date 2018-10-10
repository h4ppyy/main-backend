const models  = require('../../models/index');
const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require('../../config/config.json');

exports.login = function(req, res) {

    var payload = {
        id: 'h4ppyy'
    };

    var token = jwt.sign(payload, config.development.jwtSecret);

    res.json({access_token: token});
}