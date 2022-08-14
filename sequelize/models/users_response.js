
module.exports = (sequelize, DataTypes) => {
    const Users_Response = sequelize.define('users_response', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        deal_name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },

        average_revenue: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        time_in_businesss: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        current_positions: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        negative_days: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        industry: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        user_id:{
            type: DataTypes.INTEGER(11),
            references: {
                model: 'users',
                key: "ID"
            },
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

    return Users_Response
}