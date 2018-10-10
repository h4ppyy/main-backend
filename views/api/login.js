const models  = require('../../models/index');
const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require('../../config/config.json');

exports.login = function(req, res) {

    var inputId = req.body.inputId;
    var inputPw = req.body.inputPw;

    console.log('inputId -> ', inputId);
    console.log('inputPw -> ', inputPw);

    models.auth_user.findAll({
        where: {
            email: inputId,
            password: inputPw
        }
    }).then(rows => {
        console.log('rows-> ', rows);
        console.log('rows-> ', rows.length);

        if(rows.length != 0){
            var payload = {
                id: inputId
            };
            var token = jwt.sign(payload, config.development.jwtSecret);
            res.json({access_token: token});
        }
        else{
            res.json({access_token: 'fail'});
        }
    });    
}