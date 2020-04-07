const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtHelper = require('../config/jwtHelper');



// import the client model and schema
const Client = require('../model/client');
const ServicePro = require('../model/servicer');
const config = require('../config/db');

//register client
router.post('/register-client', (req, res) =>{
    let newClient = new Client({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile: req.body.mobile,
      city: req.body.city,
      password: req.body.password
    });
    // newClient.first_name = req.body.first_name;
    // newClient.last_name = req.body.last_name;
    // newClient.email = req.body.email;
    // newClient.mobile = req.body.mobile;
    // newClient.city = req.body.city;
    // newClient.password = req.body.password;


    Client.addClient(newClient, (err, data) => {
      if(err){
        res.json({sucess: false, msg:'Client not registered'})
      }else{
        res.json({sucess: true, msg:'Client registered successfully'})
      }
    })



    });




//authenicate client
router.post('/authenticate', (req, res, next) =>{
  const email = req.body.email;
  const password = req.body.password;

  Client.getClientByEmail(email, (err, client) =>{
    if(err) throw err;
    if(!client){
      return res.json({sucess: false, msg:'user not found'})
    }
  Client.comparePassword(password, client.password, (err, isMatch) =>{
    if(err) throw err;
    if(isMatch){
      const token = jwt.sign(client.toJSON(), config.secret, {
        expiresIn: 604000 //1 week
      });

      res.json({
        success: true,
        token: 'JWT' + token,
        client: {
          id: client._id,
          first_name: client.first_name,
          last_name: client.last_name
        }
      })
    }else{
      return res.json({success: false, msg:'Incorrect Password'})
    }
  })
  })
});



// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });

router.get('/profile/:id', (req, res, next) =>{
  Client.findOne({_id: req.params._id}, (err, client) =>{
    if(!client){
      return res.status(404).json({success: false, msg:'User record not found'})
    }else{
      return res.status(200).json({success: true, msg: 'client found'})
    }
  })
})


//sending request to the service provider
router.post('/request-service', (req, res, next) =>{
  const email = req.body.email;
  ServicePro.getServicerByEmail(email, (err, servicer) =>{
    if(err) throw err;
    if(!servicer){
     return res.send('The service provider account not found')
    }else{
      ServicePro.findOne(req.body.email, (err, servicer) =>{
        if(err){
          return res.send(err)
        }else{
          return res.status(303)
                    .set('request')
        }
      })
    }
  })
})


//export client route;
module.exports = router;
