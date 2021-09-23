const createUser = require('../../controllers/createUser.js');

function registerUser(req ,res, next) {

    const credentials = req.body;

    createUser(credentials, (err, userID) => {
        if (err) {
            res.sendStatus(500);
            next('route')
        }
        req.token = userID;
        next();
    });
    
    

};

module.exports = registerUser;