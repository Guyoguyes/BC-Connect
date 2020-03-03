const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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

const Servicer = module.exports = mongoose.model('servicer', ServicerSchema);

module.exports.getServicerById = function(id, callback){
  Servicer.findById(id, callback)
}

module.exports.getServicerByEmail = function(email, callback){

}

module.exports.addServicer = function(newServicer, callback){
  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(newServicer.password, salt, (err, hash) =>{
      newServicer.password = hash;
      newServicer.save(callback)
    })
  })
}
