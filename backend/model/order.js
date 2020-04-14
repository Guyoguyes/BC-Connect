const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  client:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client'
  },
  servicer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'servicer'
  },
  message:{
    type: String
  }
});

module.exports = mongoose.model('Order', orderSchema)
