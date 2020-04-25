const express = require('express');
const router = express.Router();

//customer controller
const ctrlCustomerRouter = require('../controllers/customerReport.controller');

//post customer report
router.post('/', ctrlCustomerRouter.postReport)

module.exports = router;
