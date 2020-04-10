const express = require('express');

const router = express.Router();
const ctrlServicer = require('../controllers/servicer.controller')

//register service provider
router.post('/register-service-provider', ctrlServicer.register);

//authenticate servicer
router.post('/authenticate', ctrlServicer.authenticate);




module.exports = router;
