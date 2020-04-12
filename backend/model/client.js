const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// const Schema = mongoose.Schema();

const ClientShema = mongoose.Schema({
  first_name:{
    type: String,
    required: 'First Name can\'t be empty'
  },
  last_name:{
    type: String,
    required: 'Last Name can\'t be empty'
  },
  email:{
    type: String,
    required:  'Email can\'t be empty',
    unique: true
  },
  mobile:{
    type: Number,
    required: 'Phone can\'t be empty'
  },
  city:{
    type: String,
    require: 'address can\'t be empty'
  },
  password:{
    type: String,
    required: 'Password can\'t be empty'
  },
  saltSecret: String
});

ClientShema.path('email').validate((val) =>{
  emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val)
}, 'Invalid email');

ClientShema.pre('save', function(next){
  bcrypt.genSalt(10, (err, salt) =>{
    bcrypt.hash(this.password, salt, (err, hash) =>{
      this.password = hash;
      this.saltSecret = salt;
      next()
    })
  })
})

ClientShema.methods.verifyPassword = function (password){
  return bcrypt.compareSync(password, this.password)
};

ClientShema.methods.generateJwt = function (){
  return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP
  })
}

 module.exports = mongoose.model('client', ClientShema);





// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
//     if(err) throw err;
//     callback(null, isMatch)
//   })
// }
