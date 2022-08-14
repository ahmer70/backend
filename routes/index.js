const Users = require('./users')
const Founder = require('./founder')
const User_Response = require('./user_response')


module.exports = function (app) {
    app.use('/api/users', Users)
    app.use('/api/founder', Founder)
    app.use('/api/response', User_Response)



}