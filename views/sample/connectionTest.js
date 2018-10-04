const Sequelize = require('sequelize');

exports.connectionTest = function(req, res) {
    const sequelize = new Sequelize('mysql://root:0000@127.0.0.1:3306/test');

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            return res.json({'status':'connection success'});
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            return res.json({'status':'connection fail'});
        });
}