const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const config = require('../config/database');
const Message = require('../models/messages');
const nodemailer = require('nodemailer');

const mailer = require('../config/mailer');

router.get('/',function(req,res){
    res.render('home');
});
router.get('/about',function(req,res){
    res.render('about');
});
router.get('/canada',function(req,res){
    res.render('canada');
});
router.get('/china',function(req,res){
    res.render('china');
});
router.get('/icbc',function(req,res){
    res.render('icbc');
});
router.get('/bilkent',function(req,res){
    res.render('bilkent');
});
router.get('/italy',function(req,res){
    res.render('italy');
});
router.get('/aiesec',function(req,res){
    res.render('aiesec');
});
router.get('/contact',function(req,res){
    res.render('contact');
});




router.post('/contact',urlencodedParser,function(req,res){
    console.log("CONTACT SUCCESS");
        console.log("OHHHH"+ req.body.name);
        console.log("yuhhhh" +req.body.lastname);
        
        var newMessage = Message(req.body).save(function(err,data){
            if (err) throw err;
            res.render("contact-success",{data: req.body});
            
        })


        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: mailer.mailAddress,
              pass: mailer.password
            }
          });
          
          var mailtoUser = {
            from: mailer.mailAddress,
            to: req.body.email,
            subject: 'Hello from Oguz Bayral Blog',
            text: 'Hello ' + req.body.name + ", thank you for contacting me. I will be reaching back to you soon!" 
          };
          var mailInfo = {
            from: mailer.mailAddress,
            to: mailer.mail,
            subject: 'New Message from Uer',
            text: 'Sender Details: %0D%0A User Name: ' + req.body.name + ' ' + req.body.lastname + '%0D%0A Mail Address: ' + req.body.lastname + '%0D%0A Message: ' + req.body.essage
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

          transporter.sendMail(mailInfo, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    
});
module.exports = router;