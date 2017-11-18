var express = require('express');
var mongoose = require('mongoose');
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
    aboutMe.create(req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi put
router.put('/:id', function(req,res,next){
 aboutMe.findByIdAndUpdate(req.params.id, function(err,post){
   if(err) return next(err);
   res.json(post)
 });
});

//fungsi delete
router.delete('/:id', function(req,res,next){
   aboutMe.findByIdAndRemove(req.params.id, function(err,post){
       if(err) return next(err);
       res.json(post);
   });
});



module.exports = router;