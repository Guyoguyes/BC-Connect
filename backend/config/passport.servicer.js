const passport = require('passport');
const localStrategy = require('passport-local').Strategy

const Servicer = require('../model/servicer');

passport.use(
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
