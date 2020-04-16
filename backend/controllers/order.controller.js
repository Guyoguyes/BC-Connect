const mongoose = require('mongoose');
const Order = require('../model/order');
const Client =require('../model/client');
const Servicer = require('../model/servicer');

//post order
module.exports.orderService = (req, res, next) =>{
  Client.findById(req.body.id)
        .then()
        .catch(err =>{
          res.status(500).json({
            message: "Client not found",
            error: err
          })
        })
  const newOrder = new Order({
    _id: mongoose.Types.ObjectId(),
    client: req.body.client,
    servicer: req.body.servicer,
    message: req.body.message
  });
  newOrder.save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              msg: 'Order stored',
              createdOrder:{
                _id: result._id,
                client: result.client,
                servicer: result.servicer,
                message: result.message
              }
            })
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({})
          })
};

//handle incoming get order request
module.exports.getOrder = (req, res, next) =>{
  Order.find()
      // .select('client, servicer, message, _id')
      .exec()
      .then(docs =>{
        res.status(200).json({
          count: docs.length,
          orders: docs.map(doc =>{
            return {
              _id: doc._id,
              client: doc.client,
              servicer: doc.servicer,
              message: doc.message,
              request:{
                type: 'GET',
                url: 'http://localhost:3000/order/' +doc._id
              }
            }
          })
        })
      })
}
