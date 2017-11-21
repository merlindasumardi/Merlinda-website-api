var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Skill = require('../models/Skill.js');

//fungsi get
router.get('/', function(req,res, next){
   Skill.find(function (err,skill) {
     if(err) return next(err);
     res.json(skill);

   });
});

//fungsi post
router.post('/', function (req,res,next) {
    Skill.create(req.body, function (err, skill) {
        if(err) return next(err);
        res.json(skill);
    });
});

//fungsi put
router.put('/:id', function (req,res,next) {
    Skill.findIdAndUpdate(req.param.id, req.body, function(err)
    {
        if(err) return next(err);
        res.json({"message": "berhasil update"});
    });
});

//fungsi delete
router.delete('/:id', function(req,res,next){
    Skill.findIdAndRemove(req.param.id, function(err){
       if(err) return next(err);
       res.json({"message" : "Berhasil Delete"})
    });
});

module.exports = router;