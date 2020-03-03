const express = require('express');

const route = express.Router();

//import servicer schema
const Servicer = require('../model/servicer')


//register service provider
route.post('/register-service-provider', (req, res) =>{
  let newServicer = new Servicer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    city: req.body.city,
    service: req.body.service,
    password: req.body.password
  });
  // newServicer.first_name = req.body.first_name;
  // newServicer.last_name = req.body.last_name;
  // newServicer.email = req.body.email;
  // newServicer.mobile = req.body.mobile;
  // newServicer.city = req.body.city;
  // newServicer.service = req.body.service;
  // newServicer.password = req.body.password;

  //save data
  Servicer.addServicer(newServicer, (err, data) =>{
    if(err){
      res.json({success: false, msg:'failed to register'})
    }else{
      res.json({success: true, msg:'registered succefully'})
    }
  })
});

module.exports = route;
