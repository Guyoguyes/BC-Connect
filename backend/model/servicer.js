const mongoose = require('mongoose');

//servicer Schema
const  ServicerSchema = mongoose.Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  mobile:{
    type: Number,
    required: true
  },
  city:{
    type: String,
    require: true
  },
  service:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('servicer', ServicerSchema)
