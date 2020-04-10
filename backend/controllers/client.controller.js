const mongoose = require('mongoose');
const Client = require('../model/client');
const config = require('../config/db');
const jwt = require('jsonwebtoken')

module.exports.register = (req, res, next) =>{
  let newClient = new Client({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    city: req.body.city,
    password: req.body.password
  });

 //save user
 Client.addClient(newClient, (err, data) => {
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
}
