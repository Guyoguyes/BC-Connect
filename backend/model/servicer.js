const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//servicer Schema
const  ServicerSchema = mongoose.Schema({
  first_name:{
    type: String,
    required:'First Name can\'t be empty'
  },
  last_name:{
    type: String,
    required: 'Last Name can\'t be empty'
  },
  email:{
    type: String,
    required: 'email can\'t be empty'
  },
  mobile:{
    type: Number,
    required: 'Phone can\'t be empty'
  },
  city:{
    type: String,
    require: 'Address can\'t be empty'
  },
  service:{
    type: String,
    required: 'service provided can\'t be empty'
  },
  password:{
    type: String,
    required: 'Passport can\'t be empty'
  },
  saltSecret: String
});

ServicerSchema.path('email').validate((val) =>{
  emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val)
}, 'Invalid email');

ServicerSchema.pre('save', function(next){
  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(this.password, salt, (err, hash) =>{
      this.password = hash;
      this.saltSecret = saltSecret
    })
  })
});

ServicerSchema.methods.verifyPassword = function (password){
  return bcrypt.compareSync(password, this.password)
}

ServicerSchema.methods.generateJwt = function(){
  return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP
  })
}

 module.exports = mongoose.model('servicer', ServicerSchema);

