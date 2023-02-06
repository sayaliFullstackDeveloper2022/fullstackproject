const express = require("express");
const router = express.Router();
const { Customer, Login } = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
    "/createcustomer",
    body('email').isEmail(),
    body("name").isAlpha(),
    body("contact").isNumeric().isLength({ min: 10 }),
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            // console.log("ERRORS::::::::::::::::", err.isEmpty(),!err.isEmpty());

            return res.status(400).json({ success: false, error: err.array() })
        }

        else {
            try {
                // console.log("LOGGGGGG try::", req.body);
                // const cust = new Customer(req.body);
                const answer = await Customer.insertMany(req.body)
                //cust.save(
                // function (err, msg) {
                //     if (err) return true;
                //     else return false;
                // }
                // )
                // console.log("::::::::::::::::::",answer)
                if (answer)
                    res.json({ success: true })
                else
                    res.json({ success: false })

            }
            catch (e) {
                res.json({ success: false })
            }
        }

    }
);

router.post(
    "/updatecustomer",
    body('email').isEmail(),
    // body("name").isAlpha(),
    body("contact").isLength({ min: 10 }),
    async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ success: false, error: err.array() })
        }

        else {
            try {
                const answer = await Customer.findByIdAndUpdate(req.body._id, {
                    $set: req.body
                })
                if (answer)
                    res.json({ success: true })
                else
                    res.json({ success: false })

            }
            catch (e) {
                res.json({ success: false })
            }
        }

    }
);

router.post(
    "/deletecustomer",
    async (req, res) => {
        try {
            console.log("delete:::::",req.body.cid)
            const answer = await Customer.deleteOne({"_id":req.body.cid})
            console.log("ANS:::",answer)
            if (answer)
                res.json({ success: true })
            else
                res.json({ success: false })
        }
        catch (e) {
            res.json({ success: false })
        }
    }
);

router.post(
    "/login",
    async (req, res) => {
        try {
            const { uname, password } = req.body;
            // console.log("LOGIN try::", uname,password);
            // const lgin=new Login(req.body);
            // console.log("LOGIN lgin::", Login.collection));

            const answer = await Login.findOne({ uname }).exec()

            // console.log("LOGIN answer::", answer);

            if (!answer) {
                // console.log("LOGIN answer fal::", answer);

                return res.status(400).json({ success: false, error: "Invalid Login Credentials" })
            }
            else {
                console.log("LOGIN answer true::", answer.password === password);

                answer.password === req.body.password ? res.json({ success: true }) : res.json({ success: false })
            }

        }
        catch (e) {
            res.json({ success: false })
        }
    }

);
router.get("/fetchcustomers",
    async (req, res) => {
        try {
            // console.log("FETCH try::");
            // const cust = new customer();
            // customer.find();
            const answer = await Customer.find({})
            // console.log(answer)
            if (answer)
                res.json({ success: true, customerData: answer })
            else
                res.json({ success: false })

        }
        catch (e) {
            res.json({ success: false })
        }
    }
);

module.exports = router;