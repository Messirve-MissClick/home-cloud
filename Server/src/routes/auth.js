const express = require('express');
const router = express.Router();

// import middlewares 
const checkRequest = require('../middlewares/authentication/checkReq.js');
const genUserData = require('../middlewares/authentication/genUserData.js');
const cookieParser = require('cookie-parser');

// Register
const HashPassword = require('../middlewares/cypher/hashPasswd.js');
const HashUserId = require('../middlewares/cypher/hashUserId.js');
const checkUser = require('../middlewares/authentication/checkUser.js');
const register = require('../middlewares/authentication/register.js');

// Login
const getUser = require('../middlewares/authentication/getUser.js');
const comparePsswd = require('../middlewares/cypher/comparePasswd.js');

router.use(express.json());
router.use(cookieParser())
router.use(checkRequest);
router.use(genUserData);

router.get('/', (req, res) => {
    // res.send('OK')});
    res.cookie('name', 'express').send('hola')}); // sets a cookie

// Register new user --> json with username, password  returns session cookie and cookie text
router.post('/register',checkUser ,HashPassword, register, HashUserId, (req, res) => {
    let cookie = JSON.stringify(req.UserData.authToken)
    res.cookie('session',cookie).send(cookie);
});

// Login --> json with mail and password returns session cookie and cookie text
router.post('/login',getUser, comparePsswd, HashUserId,(req,res) => {
    let cookie = JSON.stringify(req.UserData.authToken)
    res.cookie('session',cookie).send(cookie);
});



module.exports = router;