const passport = require('passport');
const localStrategy = require('passport-local').Strategy

const Client = require('../model/client');
const Servicer = require('../model/servicer');


//client

passport.use( 'client',
  new localStrategy({usernameField: 'email'}, (email, password, done) =>{
    Client.findOne({email:email}, (err, client) =>{
      if(err){
        return done(err)
      }else if(!client){
        return done(null, false, {message: 'Email not registered'})
      }else if(!client.verifyPassword(password)){
        return done(null, false, {message: 'Wrong Password'})
      }else{
        return done(null, client)
      }
    })
  })
)

//serviceworker

passport.use( 'servicer',
  new localStrategy({usernameField: 'email'}, (email, password, done) =>{
    Servicer.findOne({email:email}, (err, servicer) =>{
      if(err){
        return done(null)
      }else if(!servicer){
        return done(null, false, {message: 'Email not registered'})
      }else if(!servicer.verifyPassword(password)){
        return done(null, false, {message: 'Wrong Password'})
      }else {
        return done(null, servicer)
      }
    })
  })
)

