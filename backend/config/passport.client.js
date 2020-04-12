const passport = require('passport');
const localStrategy = require('passport-local').Strategy

const Client = require('../model/client');

passport.use(
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


