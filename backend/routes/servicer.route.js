const express = require('express');

const router = express.Router();
const ctrlServicer = require('../controllers/servicer.controller');
const jwtHelper = require('../config/jwtHelper');
const ClientRoute = require('./client.route');

router.use('/client-route', ClientRoute)

//register service provider
router.post('/register-service-provider', ctrlServicer.register);

//authenticate servicer
router.post('/authenticate', ctrlServicer.authenticate);

//profile
router.get('/profile/:id', jwtHelper.verifyJwtoken, ctrlServicer.servicerProfile);

//servicer dasbord
router.get('/list', ctrlServicer.servicerDashboard);




module.exports = router;
