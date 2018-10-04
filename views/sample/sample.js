const models  = require('../../models/index');
const Sequelize = require('sequelize');

exports.sample = function(req, res) {
    models.auth_user.findAll({}).then(users => {
        return res.json(users);
    })
}