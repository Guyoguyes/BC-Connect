const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
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

const Client = module.exports = mongoose.model('client', ClientShema);

module.exports.getClientById = function(id, callback){
    Client.findById(id, callback)
}

module.exports.getClientByEmail = function(email, callback){
  const query = {email : email}
  Client.findOne(query, callback)
}

module.exports.addClient = function(newClient, callback){
  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(newClient.password, salt, (err, hash) =>{
      newClient.password = hash;
      newClient.save(callback)
    })
  })
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
    if(err) throw err;
    callback(null, isMatch)
  })
}
