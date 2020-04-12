const express = require('express');

const router = express.Router();
const ctrlServicer = require('../controllers/servicer.controller');
const jwtHelper = require('../config/jwtHelper')

//register service provider
router.post('/register-service-provider', ctrlServicer.register);

//authenticate servicer
router.post('/authenticate', ctrlServicer.authenticate);

//profile
router.get('/profile', jwtHelper.verifyJwtoken, ctrlServicer.servicerProfile)




module.exports = router;
