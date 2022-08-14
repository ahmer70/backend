const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Qualification_Data, Users, Users_Response } = require("../sequelize/sequelize");

const { JWT } = require('../jwtAuth');


router.put('/register', JWT, async (req, res) => {
    try {
        const { dn, mar, nd, state, tib, cp, industry } = req.body;

        let data = {
            deal_name: dn,
            average_revenue: mar,
            state: state,
            time_in_businesss: tib,
            current_positions: cp,
            negative_days: nd,
            industry: industry,
            user_id: req.token._id
        }

        let add = await Users_Response.create(data)
        res.json({ response: add })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})


router.get('/getAll', JWT, async (req, res) => {
    try {




        let find = await Users_Response.findAll(
            {

                order: [['created', 'DESC']],

                include: [{
                    model: Users,
                    as: 'user',
                    attributes: ['f_name', 'l_name', 'email'],



                }
                ]
            }
        )


        res.json({ response: find })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})

router.get('/getAllByUserID', JWT, async (req, res) => {

    try {




        let find = await Users_Response.findAll({

            order: [['created', 'DESC']],

            where: {
                user_id: req.token._id
            }
        })


        res.json({ response: find })
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


router.get('/getOne', JWT, async (req, res) => {

    try {

        console.log("req.query", req.query)


        // let find = await Users_Response.findOne({

        //     order: [['created', 'DESC']],

        //     where: {
        //         authorId: {
        //           [Op.eq]: 2
        //         }
        //       }
        // })


        res.json({ response: "find" })
    } catch (error) {
        console.log(error.message)
        res.json({ error: error.message })
    }
})

module.exports = router