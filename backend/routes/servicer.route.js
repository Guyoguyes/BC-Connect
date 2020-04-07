const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');


//import servicer schema
const Servicer = require('../model/servicer');
const ClientRoute = require('../routes/client.route')
const config = require('../config/db')


router.use('/clientRoute', ClientRoute)

//register service provider
router.post('/register-service-provider', (req, res) =>{
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

//authenticate servicer
router.post('/authenticate', (req, res, next) =>{
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
});


//get all service providers
router.get('/servicer-list', (req, res) =>{
  Servicer.find(function(err, data){
    if(err){
      res.json(err)
      console.log(err)
    }else{
      console.log(data)
    }
  })
})


router.get('/profile', (req, res) =>{
  res.send('Profile')
});

//get request from the client
router.get('/request', (req, res) =>{
  
})

module.exports = router;
