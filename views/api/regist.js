const models  = require('../../models/index');
const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const config = require('../../config/config.json');

exports.regist = function(req, res) {

    var inputId = req.body.inputId;
    var inputPw = req.body.inputPw;
    var inputPw2 = req.body.inputPw2;

    console.log('inputId -> ', inputId);
    console.log('inputPw -> ', inputPw);
    console.log('inputPw2 -> ', inputPw2);

    if(inputId == ''){
        console.log('id is null');
        res.json({status: 'error001'});
    } else if(inputPw = ''){
        console.log('pw is null');
        res.json({status: 'error002'});
    } else if(inputPw2 = ''){
        console.log('pw2 is null');
        res.json({status: 'error003'});
    }

    if(inputPw == inputPw2){
        console.log('good');
    }
    else{
        console.log('fail');
    }
    /*
    models.auth_user.findAll({
        where: {
            authorId: 2
        }
    });
    */

    var payload = {
        id: 'h4ppyy'
    };

    var token = jwt.sign(payload, config.development.jwtSecret);

    res.json({access_token: token});
}