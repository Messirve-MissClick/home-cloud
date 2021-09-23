const express = require('express');
const router = express.Router();

// import middlewares 
const checkRequest = require('../middlewares/authentication/checkReq.js');

const HashPassword = require('../middlewares/authentication/encript.js').hashpassword;
const HashUserId = require('../middlewares/authentication/encript.js').hashUserId;
const checkUser = require('../middlewares/authentication/checkUser.js');
const register = require('../middlewares/authentication/register.js');

router.use(express.json());
router.use(checkRequest);

router.get('/', (req, res) => res.sendStatus(200).send('AuthRoute'));

// Register new user --> json with mail, username, password
router.post('/register',checkUser ,HashPassword, register, HashUserId, (req, res) => {
    res.send(JSON.stringify(req.authToken));
});

// Login --> json with mail and password
router.post('/login',(req,res) => res.sendStatus(200).send('OK'));

module.exports = router;