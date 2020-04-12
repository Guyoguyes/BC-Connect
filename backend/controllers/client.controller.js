const mongoose = require('mongoose');
const Client = require('../model/client');
const lodash = require('lodash');
const passport = require('passport')

module.exports.register = (req, res, next) =>{
  let newClient = new Client();
  newClient.first_name= req.body.first_name,
  newClient.last_name= req.body.last_name,
  newClient.email= req.body.email,
  newClient.mobile= req.body.mobile,
  newClient.city= req.body.city,
  newClient.password= req.body.password

 //save user
 newClient.save((err, data) => {
  if(!err){
    res.json({sucess: true, msg:'Client registered'})
  }else{
    if(err.code === 11000){
      res.status(422).send(['Duplicate email address found'])
    }
  }
})
}

module.exports.authenticate = (req, res, next) =>{
  passport.authenticate('local', (err, client, info) =>{
    if(err){
      return res.status(400).json(err)
    }else if(client){
      return res.status(200).json({"token": client.generateJwt()})
    }else{
      return res.status(404).json(info)
    }
  })(req, res);
};

module.exports.clientProfile = (req, res, next) =>{
  Client.findOne({_id: req._id}, (err, client) =>{
    if(!client){
      return res.status(404).json({status: false, msg:'User Record not found'})
    }else{
      return res.status(200).json({status: true, client: lodash.pick(client, ['first_name', 'last_name', 'email', 'mobile'])})
    }
  })
}
