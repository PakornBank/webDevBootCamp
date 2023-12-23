const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const authRoutes = require('./routes/auth');

const sessionConfig = { secret: 'mysecret', resave: false, saveUninitialized: false };

mongoose
    .connect('mongodb://127.0.0.1:27017/passportDemo')
    .then(() => {
        console.log('Mongoose Connected!');
    })
    .catch((err) => {
        console.log('Failed connecting', err);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session()); // must be after session()

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', authRoutes);

app.use((err, req, res, next) => {
    const { status = 500, message = 'ERROR' } = err;
    res.status(status).send(message);
});

app.use('/', (req, res) => {
    res.status(404).send('Path not found');
});



app.listen(3000, () => {
    console.log('Listening on port 3000');
});