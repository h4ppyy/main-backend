const models  = require('../../models/index');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

exports.sample = function(req, res) {
    const sequelize = new Sequelize('mysql://root:0000@127.0.0.1:3306/test');

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    models.auth_userprofile.findOne({}).then(users => {
        return res.json(users);
    })
}