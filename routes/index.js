var express = require('express');
var router = express.Router();
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', function(req, res, next) {
    const sequelize = new Sequelize('mysql://root:0000@127.0.0.1:3306/test');

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    const User = sequelize.define('auth_user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    }, {freezeTableName: true, timestamps: false} );

    var hello = null;

    User.findOne({
        where: { email: 'test1@example.com' }
    }).then(users => {
        console.log(users);
        console.log(users.dataValues);
        console.log(users.dataValues.id);
        console.log(users.dataValues.email);
        console.log(users.dataValues.password);

        hello = users.dataValues;
        return res.json(users);
    })
});

module.exports = router;
