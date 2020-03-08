const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const Client = require('../model/client')
const config = require('../config/db');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new jwtStrategy(opts, (jwt_payload, done) =>{
        Client.getClientById(jwt_payload._id, (err, client) =>{
            if(err){
                return done(err, false)
            }
            if(client){
                return done(null, client)
            }
            else{
                return done(null, false)
            }
        })
    }))
}