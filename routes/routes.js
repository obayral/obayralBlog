const express = require('express');
const router = express.Router();

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
module.exports = router;