const express =require('express');
const router = express.Router();

const ctrlOrder = require('../controllers/order.controller');

//Post order
router.post('/', ctrlOrder.orderService);


//export router
module.exports = router;
