var express = require('express');
var mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose);
var router = express.Router();
var aboutMe = require('../models/aboutMe.js');

// fungsi get
router.get('/', function(req,res,next){
    aboutMe.find(function (err, aboutMe) {
        if(err) return next(err);
        res.json(aboutMe);
    });
});

//fungsi add
router.post('/', function(req,res, next){

    req.body.birthDate = new DateOnly(req.body.birthDate);
    req.body.birthDate.month = req.body.birthDate.month+1;
    console.log(req.body.birthDate);
    aboutMe.create(req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi put
router.put('/:id', function(req,res,next){
 aboutMe.findByIdAndUpdate(req.params.id, req.body, function(err){
   if(err) return next(err);
     res.json({"message": "Berhasil Update"});
 });
});

//fungsi delete
router.delete('/:id', function(req,res,next){
   aboutMe.findByIdAndRemove(req.params.id, function(err){
       if(err) return next(err);
       res.json({"message": "Berhasil Delete"});
   });
});



module.exports = router;