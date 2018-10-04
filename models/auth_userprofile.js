module.exports = (sequelize, DataTypes) => {
    const auth_userprofile = sequelize.define('auth_userprofile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        sex: {
            type: DataTypes.STRING
        },
        birth: {
            type: DataTypes.STRING
        },
    }, {freezeTableName: true, timestamps: false} );

    return auth_userprofile;
};