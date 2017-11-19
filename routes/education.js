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
    Education.create(req.body, function(err, education){
        if(err) return next(err);
        res.json(education);
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
    Education.findByIdAndUpdate(req.params.id,req.body, function(err){
        if(err) return next(err);
        //console.log(post);
        res.json({"message": "Berhasil Update"});
    });
});

//fungsi Delete /education/id (delete berdasatkan id)
router.delete('/:id', function(req, res, next)
{
    //console.log(req.params.id);
    Education.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) return next(err);
        res.json({"message": "Berhasil Delete"});
    });
});

module.exports = router;