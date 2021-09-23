const express = require('express');
const auth = require('./routes/auth.js');
const app = express();
const cookieParser = require('cookie-parser');

// routes

app.use('/auth',auth);


// app.use(express.json());

app.get('/',express.json(),cookieParser(),(req, res) => {
    res.cookie('name', 'express').send('Cookie set?');
    // res.status(200).send('Hello world');
});

exports.app = app;