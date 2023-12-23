const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/utils');

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.send('Require login');
    }
    else {
        next();
    }
};

router.get('/secret', requireLogin, wrapAsync((req, res, next) => {
    res.send('I ate your hotdog!'); 
}));

router.post('/register', wrapAsync(async (req, res, next) => {
    const { password, username } = req.body;
    
    const newUser = new User({username,password});
    const saved = await newUser.save();
    req.session.user_id = saved._id;
    res.send('Registered!');
}));

router.post('/login', wrapAsync(async (req, res, next) => {
    const { username, password } = req.body;

    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        return res.send('Logged in'); 
    }
    return res.send('Wrong username or password');
}));

router.post('/logout', wrapAsync((req, res, next) => {
    req.session.destroy();
    res.send('Logged out');
}));

module.exports = router;
