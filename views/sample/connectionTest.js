const Sequelize = require('sequelize');
const config = require('../../config/config.json');

exports.connectionTest = function(req, res) {
    
    const sequelize = new Sequelize(
        'mysql://' +
        config.development.username +
        ':' +
        config.development.password +
        '@' +
        config.development.host +
        ':3306' +
        '/' +
        config.development.database
    );

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
        return res.json({'status':'connection success'});
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
        return res.json({'status':'connection fail'});
    });
}