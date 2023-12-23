const express = require('express');
const router = express.Router();
const User = require('../models/user');
const catcherWrapper = require('../utils/catcherWrapper');
const isLoggedIn = require('../utils/isLoggedIn');
const passport = require('passport');

router.get('/protected', isLoggedIn, (req, res) => {
    res.send(req.user);
} );

router.post('/register', catcherWrapper(async (req, res, next) => {
    const { email, username, password } = req.body;
    const user = new User({
        email,
        username
    });
    const newUser  = await User.register(user, password);
    res.send(newUser);
}));

router.post('/login',passport.authenticate('local', { 
    successRedirect: '/protected',
    failureRedirect: '/login'
}));

router.post('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.send('logged out');
    });
});

module.exports = router;