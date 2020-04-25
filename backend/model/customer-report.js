const mongoose = require('mongoose');

const customerReportSchema = mongoose.Schema({
  name:{
    type: String
  },
  email:{
    type: String
  },
  subject:{
    type: String
  },
  message:{
    type: String
  }
});

module.exports = mongoose.model('customerReport', customerReportSchema)
