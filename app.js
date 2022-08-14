
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser')
const cors = require('cors')


const db = require('./sequelize/sequelize')


app.use(express.json({ limit: "100mb" }))
app.use(bodyParser.json({ limit: "100mb" }))
app.use(cors())
require('./routes')(app)

db.sequelize.sync().then(() => {
    console.log("database connected")
})



http.createServer(app).listen(81, () => console.log("server running"))