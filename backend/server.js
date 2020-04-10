require('./config/config');
require('./model/database')

const express = require('express');
const path = require('path');
const chalk = require('chalk')
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');



const app = express();

const http = require('http').Server(app)
const io  = require('socket.io')(http)

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//passport Midleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport.client')(passport);
require('./config/passport.servicer')(passport);

//import client route
const clientRoute = require('./routes/client.route');
//import service provider route
const serviceprovider = require('./routes/servicer.route');



app.use('/client', clientRoute);

app.use('/servicer', serviceprovider)

//Route
app.get('/', (req, res) =>{
  res.send('hello bluecollar')
});


io.on('connection', (socket) =>{
  console.log('User Connected')
})

//error handler
app.use((err, req, res, next) =>{
  if(err.name === 'ValidationError'){
    var valError = [];
    Object.keys(err.errors).forEach(key => valError.push(err.err[key].message));
    res.status(422).send(valError)
  }
})

//Server
var server = http.listen(process.env.PORT, () =>{
  console.log(chalk.red('made with love by Guyo'));
  console.log('Server listening to localhost: '+ process.env.PORT, new Date)
})
