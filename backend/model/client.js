const mongoose = require('mongoose');
// const Schema = mongoose.Schema();

const ClientShema = mongoose.Schema({
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
  password:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('client', ClientShema)
