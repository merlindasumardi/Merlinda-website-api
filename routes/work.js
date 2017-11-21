var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var work = require('../models/Work.js');
var moment = require('moment');

//fungsi get
router.get('/', function(req,res,next){
   work.find(function(err, work){
       if(err) return next(err);
       res.json(work);
   });
});

//fungsi post
router.post('/', function(req,res,next){
    req.body.startDate = moment(req.body.startDate).format('DD/MM/YYYY');
    console.log(req.body.startDate);

    req.body.endDate = moment(req.body.endDate).format('DD/MM/YYYY');

    work.create(req.body, function(err,post)
    {
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi put
router.put('/:id', function (req,res,next) {
    req.body.startDate = moment(req.body.startDate).format('dd/mm/yyyy');
    // console.log(req.body.startDate);

    req.body.endDate = moment(req.body.endDate).format('dd/mm/yyyy');

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