const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require('../models/User');
const {
    JWTSecret
} = require('../config/keys');
const UserException = require('../Exceptions/UserException');

const router = express.Router();

router.post('/login', (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    // User.findOne({
    //         email
    //     })
    //     .then(user => {
    //         if (!user) {
    //             next(new UserException(404, "User not found"));
    //         }
    //         bcrypt.compare(password, user.password)
    //             .then(isMatch => {
    //                 if (isMatch) {
    //                     const payload = {
    //                         name: user.name,
    //                         userType: user.userType
    //                     };
                        const payload = {
                            test: true
                        };

                        const user = {
                            name: "test user",
                            userType: "user"
                        }

                        jwt.sign(payload, JWTSecret, {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) throw err;
                            res.json({
                                success: true,
                                token: token,
                                name: user.name,
                                userType: user.userType
                            });
                        })
//                     } else {
//                         next(new UserException(400, "password is incorrect"));
//                     }
//                 })
//         })
});

module.exports = router;