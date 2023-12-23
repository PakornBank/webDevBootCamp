const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const registerRoutes = require('./routes/register');

mongoose
    .connect('mongodb://127.0.0.1:27017/autoDemo')
    .then(() => {
        console.log('Mongoose Connected!');
    })
    .catch((err) => {
        console.log('Failed connecting', err);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: false }));
app.use('/', registerRoutes);



app.use((err, req, res, next) => {
    const { status = 500, message = 'ERROR' } = err;
    res.status(status).send(message);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});