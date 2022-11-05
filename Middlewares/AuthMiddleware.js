const jwt = require('jsonwebtoken');
const { User } = require('../DataBase/UserSchema');

const { JWT_SECRET_KEY } = require('../tools/jwtKey')

const requireAuth = (req, res, next) => {
    let token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, JWT_SECRET_KEY, (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/login')
            }
            else {
                console.log(decodedToken);
                next();
            }
        })
    }

    else {
        res.redirect('/login')
    }
}

const checkUser = (req, res, next) => {
    let token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, JWT_SECRET_KEY, async(err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id)
                res.locals.user = user;
                next();
            }
        })
    }

    else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser }