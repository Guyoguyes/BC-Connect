const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


//import servicer schema
const Servicer = require('../model/servicer');

module.exports.register = (req, res, next) =>{
  let newServicer = new Servicer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    city: req.body.city,
    service: req.body.service,
    password: req.body.password
  });

  Servicer.addServicer(newServicer, (err, data) =>{
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
  const email = req.body.email;
  const password = req.body.password;

  Servicer.getServicerByEmail(email, (err, servicer) =>{
    if(err) throw err;
    if(!servicer){
      return res.json({success: false, msg:'User not found'})
    }
  Servicer.comparePassword(password, servicer.password, (err, isMatch) =>{
    if(err) throw err;
    if(isMatch){
      const token = jwt.sign(servicer.toJSON(), config.secret2, {
        expiresIn: 604000 //1 week
      });
      res.json({
        success: true,
        token: 'JWT' + token,
        servicer: {
          id: servicer._id,
          first_name: servicer.first_name,
          last_name: servicer.last_name,
          service: servicer.service
        }
      })
    }
  })
  })
}
