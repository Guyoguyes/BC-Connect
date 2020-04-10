const mongoose = require('mongoose');
require('../config/config')


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) =>{
  if(!err){
    console.log('Database Connected: '+process.env.MONGODB_URI)
  }else{
    console.log('Database Error: ' +JSON.stringify(err, undefined, 2))
  }
})

require('../model/client');
require('../model/servicer')
