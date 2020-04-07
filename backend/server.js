const express = require('express');
const path = require('path');
const chalk = require('chalk')
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/db');

//connect to database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//connected to database
mongoose.connection.on('connected', ()=>{
  console.log('Database connected: '+config.database)
});
//error connecting
mongoose.connection.on('error', (err) =>{
  console.log('Database Error: '+err)
});

const app = express();
const port = 3000;
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

//Server
var server = http.listen(port, () =>{
  console.log(chalk.red('made with love by Guyo'));
  console.log('Server listening to localhost: '+ server.address().port, new Date)
})
