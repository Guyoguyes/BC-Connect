const express = require('express');
const router = express.Router();

const ctrlClient = require('../controllers/client.controller')



// import the client model and schema


//register client
router.post('/register-client', ctrlClient.register );




//authenicate client
router.post('/authenticate', ctrlClient.authenticate);



// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });

// router.get('/profile/:id', (req, res, next) =>{
//   Client.findOne({_id: req.params._id}, (err, client) =>{
//     if(!client){
//       return res.status(404).json({success: false, msg:'User record not found'})
//     }else{
//       return res.status(200).json({success: true, msg: 'client found'})
//     }
//   })
// })

// router.get('/profile',autJwt, (req, res) =>{
//  res.status(200).send("User Content")
// })

// router.get('profile', (req, res, next) =>{
//   Client.findOne({_id: req._id}, (err, client) =>{
//     if(err) throw err;
//     if(!client){
//       return res.status(404).json({status: false, msg: 'client profile'})
//     }else{
//       return res.status(200).json({status: true, client: _.pick(client,['first_name', 'last_name'])})
//     }
//   })
// })


// //sending request to the service provider
// router.post('/request-service', (req, res, next) =>{
//   const email = req.body.email;
//   ServicePro.getServicerByEmail(email, (err, servicer) =>{
//     if(err) throw err;
//     if(!servicer){
//      return res.send('The service provider account not found')
//     }else{
//       ServicePro.findOne(req.body.email, (err, servicer) =>{
//         if(err){
//           return res.send(err)
//         }else{
//           return res.status(303)
//                     .set('request')
//         }
//       })
//     }
//   })
// })


//export client route;
module.exports = router;
