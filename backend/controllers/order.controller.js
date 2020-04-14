const mongoose = require('mongoose');
const Order = require('../model/order');

//post order
module.exports.orderService = (req, res, next) =>{
  const newOrder = new Order({
    _id: mongoose.Types.ObjectId(),
    client: req.body.client,
    servicer: req.body.servicer,
    message: req.body.message
  });
  newOrder.save()
          .then(result => {
            console.log(result);
            res.status(201).json(result)
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({})
          })
};

//handle incoming get order request
