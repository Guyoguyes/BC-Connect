const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const lodash = require('lodash')


//import servicer schema
const Servicer = require('../model/servicer');

module.exports.register = (req, res, next) =>{
  let newServicer = new Servicer();
  newServicer.first_name= req.body.first_name,
  newServicer.last_name= req.body.last_name,
  newServicer.email= req.body.email,
  newServicer.mobile= req.body.mobile,
  newServicer.city= req.body.city,
  newServicer.service= req.body.service,
  newServicer.password= req.body.password

  newServicer.save((err, data) =>{
    if(!err){
      res.json({success: true, msg:'registered succeffully'})
    }else{
      if(err.code === 11000){
        res.status(422).send(['Duplicate email address found'])
      }
    }
  })
};

module.exports.authenticate = (req, res, next) =>{
  passport.authenticate('local', (err, servicer, info) =>{
    if(err){
      return res.status(400).json(err)
    }else if(servicer){
      return res.status(200).json({'token': servicer.generateJwt()})
    }else{
      return res.status(404).json(info)
      console.log(err)
    }
  })(req, res)
}

module.exports.servicerProfile = (req, res, next) =>{
  Servicer.findOne({_id: req._id}, (err, servicer) =>{
    if(!servicer){
      return res.status(404).json({status: false, messsage:'User record not found'})
    }else{
      return res.status(200).json({status: true, servicer: lodash.pick(servicer, ['first_name', 'last_name', 'email', 'mobile', 'service'])})
    }
  })
}

module.exports.servicerDashboard = (req, res, next) =>{
  Servicer.find(function (err, servicer){
    if(err){
      res.status(404).json({status: false, messsage:'Servicers Not found'})
    }else{
      res.json(servicer)
    }
  })
}


//to be deleted
//used for testing purpose of the api
module.exports.getServicer = (req, res, next) =>{
  Servicer.find(function(err, servicer){
    if(err){
      res.status(400).json(err)
    }else{
      res.status(200).json(servicer)
    }
  })
}
