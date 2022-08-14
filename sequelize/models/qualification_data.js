
module.exports = (sequelize, DataTypes) => {
    const Qualification_Data = sequelize.define('qualification_data', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        founder: {
            type: DataTypes.STRING(45),
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

    return Qualification_Data
}