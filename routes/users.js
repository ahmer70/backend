const express = require("express");
const router = express.Router();
const { Users, Qualification_Data, Users_Response } = require("../sequelize/sequelize");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT } = require('../jwtAuth')
router.put('/register', async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        console.log("passwords", password)
        let pass = await bcrypt.hash(password, 10)
        let data = {
            f_name: fname,
            l_name: lname,
            email: email,
            password: pass,

        }




        let user = await Users.create(data)



        res.json({ user: user })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.get('/login', async (req, res) => {
    try {
        const { email, password } = req.query;
        let user = await Users.findOne({
            where: {
                email: email,
            }
        })
        if (!user) throw new Error("User not found")
        const passwordBd = user.password;

        const isPassword = await bcrypt.compare(password, passwordBd)
        if (!isPassword) throw new Error("Invalid Password")
        let token = jwt.sign({ _id: user.id }, 'fivver_salt')
        res.status(200).json({
            token,
            user
        })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})

router.put('/add', JWT, async (req, res) => {
    try {
        const { founder, mar, nd, state, tib, cp, industry } = req.body;

        let data = {
            founder: founder,
            average_revenue: mar,
            state: state,
            time_in_businesss: tib,
            current_positions: cp,
            negative_days: nd,
            industry: industry,
        }

        let add = await Qualification_Data.create(data)
        res.json({ user: add })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.get('/getAll', JWT, async (req, res) => {
    try {




        let find = await Qualification_Data.findAll({ order: [['created', 'DESC']] })


        res.json({ user: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.get('/getAllUsers', JWT, async (req, res) => {
    try {




        let find = await Users.findAll({ order: [['created', 'DESC']] })


        res.json({ user: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.get('/getAllCount', JWT, async (req, res) => {
    try {




        let QD = await Qualification_Data.count()
        let UR = await Users_Response.count()
        let user = await Users.count()



        res.json({ founder: QD, user: user, response: UR })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})
module.exports = router