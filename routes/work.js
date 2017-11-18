var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var work = require('../models/Work.js');

//fungsi get
router.get('/', function(req,res,next){
   work.find(function(err, work){
       if(err) return next(err);
       res.json(work);
   });
});

//fungsi post
router.post('/', function(req,res,next){
    work.create(req.body, function(err,post)
    {
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi put
router.put('/:id', function (req,res,next) {
    work.findByIdAndUpdate(req.params.id, function(err,post){
       if(err) return next(err);
       res.json(post);
    });
});

//fungsi Delete
router.delete('/:id', function(req,res,next){
 work.findByIdAndRemove(req.params.id, function(err,post){
     if(err) return next(err);
     res.json(post);
 });
});
module.exports = router;