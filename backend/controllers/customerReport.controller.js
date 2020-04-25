const customerSchema = require('../model/customer-report');

module.exports.postReport = (req, res, next) =>{
  let report = new customerSchema()
  report.name = req.body.name;
  report.email = req.body.email;
  report.subject = req.body.subject;
  report.message = req.body.message;

  //save the report
  report.save((err, customerreport) =>{
    if(!err){
      res.status(200).json({sucess: true, message: 'Message sent, we will get to you as soon as possible'})
    }else{
      res.send({success: false, message: 'Message not sent'})
    }
  })
}
