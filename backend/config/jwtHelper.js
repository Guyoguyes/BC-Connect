const jwt = require('jsonwebtoken');


module.exports.verifyJwtoken = function(req, res, next){
  var token;
  if('authorization' in req.headers){
    token = req.headers['authorization'].split(' ')[1];
  }
  if(!token){
    return res.status(403).send({success: false, msg:'No token provided'})
  }else{
    jwt.verify(token, process.env.JWT_SECRET,
      (err, decoded) =>{
        if(err){
          return res.status(500).json({success: false, msg:'Token authentication failed.'})
        }else{
          req._id = decoded._id;
          next();
        }
      })
  }
}
