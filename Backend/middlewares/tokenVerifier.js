const jwt = require('jsonwebtoken')

const {
    JWTSecret
} = require('../config/keys');

const TokenException = require('../Exceptions/TokenException');

module.exports = function () {
    return function (req, res, next) {
        if (/^\/API\/user.*$/.test(req.originalUrl)) { // ignore /API/user path
            next();
        } else if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, JWTSecret, (err, decoded) => {
                if (err) {
                    next(new TokenException(401, "Invalid Token"));
                }
                req.body.jwt = decoded;
                next();
            })
        }
    }
}