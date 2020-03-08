const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')


// import the client model and schema
const Client = require('../model/client');
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

    // newClient.save(function(err, client){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log('client registered')
    //         res.json({success: true, msg:'Client registered successful'})
    //     }

        // bcrypt.genSalt(10, function(err, salt){
        //     bcrypt.hash(newClient.password, salt,(err, hash) =>{
        //         if(err) throw err;
        //         newClient.password = hash;
        //     })
        // })
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
})


//export client route;
module.exports = router;
