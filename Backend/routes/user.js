const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/User');
const {
    JWTSecret
} = require('../config/keys');

const router = express.Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;

    // User.findOne({
    //         email
    //     })
    //     .then(user => {
    //         if (!user) {
    //             return res.status(404).json({
    //                 error: "User not found"
    //             })
    //         }
    //         bcrypt.compare(password, user.password)
    //             .then(isMatch => {
    //                 if (isMatch) {
                        // const payload = {
                        //     name: user.name,
                        //     userType: user.userType
                        // };

                        const payload = {test:true};

                        jwt.sign(payload, JWTSecret, {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) throw err;
                            res.json({
                                success: true,
                                token: token
                            });
                        })
        //             } else {
        //                 res.status(400).json({
        //                     "error": "password is incorrect"
        //                 });
        //             }
        //         })
        // })


});

module.exports = router;