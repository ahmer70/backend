const Sequelize = require("sequelize")
const sequelize = new Sequelize('launchpadlending_two-page', 'root', 'owaiskhald1212!', {
    host: 'localhost',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
})

let db = {

}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require('./models/users')(sequelize, Sequelize)
db.Qualification_Data = require('./models/qualification_data')(sequelize, Sequelize)
db.Users_Response = require('./models/users_response')(sequelize, Sequelize)

 require('./relations')(db);
module.exports = db