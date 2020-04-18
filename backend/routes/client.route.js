const express = require('express');
const router = express.Router();

const ctrlClient = require('../controllers/client.controller');
const jwtHelper = require('../config/jwtHelper')



// import the client model and schema


//register client
router.post('/register-client', ctrlClient.register );

//authenicate client
router.post('/authenticate', ctrlClient.authenticate);

//client profile
router.get('/profile', jwtHelper.verifyJwtoken, ctrlClient.clientProfile);

//to be deleted
//used for a test of the api purpose
// router.get('/', ctrlClient.getClient);






//export client route;
module.exports = router;
