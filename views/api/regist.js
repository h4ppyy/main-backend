const models  = require('../../models/index');
const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require('../../config/config.json');

exports.regist = function(req, res) {

    var inputId = req.body.inputId;
    var inputPw = req.body.inputPw;
    var inputPw2 = req.body.inputPw2;
    var lock = 0;

    if(inputId == ''){
        lock = 1;    
        res.json({status: 'error001'});
    } else if(inputPw == ''){
        lock = 1;
        res.json({status: 'error002'});
    } else if(inputPw2 == ''){
        lock = 1;
        res.json({status: 'error003'});
    }

    if(inputPw == inputPw2 && lock == 0){
        models.auth_user.create({
            email: inputId,
            password: inputPw,
        }).then(newUser => {
            res.json({status: 'success'});
        });
    }
    else{
        res.json({status: 'error004'});
    }
}