const models  = require('../../models/index');
const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require('../../config/config.json');

exports.header = function(req, res) {

    console.log(req.headers.authorization);
    var decoded = jwt.verify(req.headers.authorization, config.development.jwtSecret, function(err, decoded) {

        console.log('decoded ->', decoded);

        if(decoded != null){
            console.log(decoded)
            res.json({result: decoded});
        } else{
            res.json({result: 'fail'});
        }
    });
}