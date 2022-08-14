module.exports = function (db) {
    
    db.Users_Response.belongsTo(db.Users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        as: 'user'
    });


}