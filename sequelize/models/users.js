
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        f_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        l_name: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },


        created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW()
        },



    }, {
        timeStamp: true,
        freezeTableName: true,
        updatedAt: false,
        createdAt: 'created'
    })

    return Users
}