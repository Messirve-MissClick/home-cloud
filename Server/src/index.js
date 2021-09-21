const express = require('express');
const auth = require('./routes/auth.js');
const app = express();

// routes

app.use('/auth',auth);


// app.use(express.json());

app.get('/',express.json(),(req, res, next) => {
    req.body.myvalue = 'IT WORKS'
    next();
},(req, res) => {
    console.log(req.body.mail)
    res.status(200).send('Hello world');
});

exports.app = app;