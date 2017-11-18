var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Education = require('../models/Education.js');

//fungsi GET
router.get('/', function(req, res, next){
    Education.find(function(err, education){
        if(err) return next(err);
        res.json(education);
    });
});

//fungsi POST
router.post('/', function(req, res, next){
    Education.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi GET /education/id (get berdasarkan id)
router.get('/:id', function(req,res, next)
{
   Education.findById(req.params.id, function(err, post){
      if(err) return next(err);
      res.json(post);
   });
});

//fungsi PUT /education/id (edit berdasarkan id)

router.put('/:id', function(req, res, next)
{
    Education.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi Delete /education/id (delete berdasatkan id)
router.delete('/:id', function(req, res, next)
{
    Education.findByIdAndRemove(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;