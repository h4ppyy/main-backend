module.exports = function (sequelize, DataTypes) {
    const auth_user = sequelize.define('auth_user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    }, {freezeTableName: true, timestamps: false} );

    return auth_user;
};