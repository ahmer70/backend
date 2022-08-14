const express = require("express");
const router = express.Router();
const { Qualification_Data } = require("../sequelize/sequelize");

const { JWT } = require('../jwtAuth')





router.put('/register', JWT, async (req, res) => {
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
        res.json({ founder: add })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.get('/getAll', JWT, async (req, res) => {
    try {




        let find = await Qualification_Data.findAll({
            order: [['created', 'DESC']],
        })


        res.json({ founder: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.delete('/delete', JWT, async (req, res) => {
    try {

        let find = await Qualification_Data.destroy({
            where: {
                id: req.query._id
            }
        })


        res.json({ founder: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.post('/update', JWT, async (req, res) => {
    try {
        const { founder, mar, nd, state, tib, cp, industry, id } = req.body;

        let find = await Qualification_Data.findOne({ where: { id: id } })
        let data = {
            founder: founder,
            average_revenue: mar,
            state: state,
            time_in_businesss: tib,
            current_positions: cp,
            negative_days: nd,
            industry: industry,
        }
        if (find) {
            let add = await Qualification_Data.update(data, {
                where: {
                    id: id
                }
            })
        }

        res.json({ founder: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})



module.exports = router