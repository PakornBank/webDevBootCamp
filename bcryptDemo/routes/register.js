const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/utils');
const bcrypt = require('bcrypt');

router.get('/secret', wrapAsync((req, res) => {
    if (!req.session.user_id) {
        return res.send('Please sign in');
    }
    res.send('I ate your hotdog!'); 
}));

router.post('/register', wrapAsync(async (req, res) => {
    const { password, username } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    const newUser = new User({
        username,
        password: hashed
    });
    const saved = await newUser.save();
    req.session.user_id = saved._id;
    res.send('Registered!');
}));

router.post('/login', wrapAsync(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            req.session.user_id = user._id;
            console.log(req.session.user_id);
            return res.send('Logged in');
        }
    }
    return res.send('Wrong username or password');
    
}));

router.post('/logout', wrapAsync((req, res) => {
    req.session.user_id = null;
    res.send('Logged out');
}));

module.exports = router;
