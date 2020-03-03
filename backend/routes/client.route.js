const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt')


// import the client model and schema
const Client = require('../model/client');

//register client
route.post('/register-client', (req, res) =>{
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




//login user


//export client route;
module.exports = route;
