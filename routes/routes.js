const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const config = require('../config/database');
const Message = require('../models/messages');

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
router.get('/contact',function(req,res){
    res.render('contact');
});
router.post('/contact',urlencodedParser,function(req,res){
    console.log("CONTACT SUCCESS");
        console.log(req.body);
        
        
        var newMessage = Message(req.body).save(function(err,data){
            if (err) throw err;
            res.render("contact-success",{data: req.body});
        })
    
});
module.exports = router;