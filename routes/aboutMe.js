const express = require('express');
const mongoose = require('mongoose');
//const moment = require('moment');
const router = express.Router();
const aboutMe = require('../models/aboutMe.js');

// fungsi get
router.get('/', function(req,res,next){
    aboutMe.find(function (err, aboutMe) {
        if(err) return next(err);
        res.json(aboutMe);
    });
});

//fungsi add
router.post('/', function(req,res, next){

    // req.body.birthDate = moment(req.body.birthDate).format('DD/MM/YYYY');
    // console.log(req.body.birthDate);

    aboutMe.create(req.body, function(err,aboutMe){
        if(err) return next(err);
        res.json(aboutMe);
    });
});

//fungsi put
router.put('/:id', function(req,res,next){
    // req.body.birthDate = moment(req.body.birthDate).format('dd/mm/yyyy');
    // console.log(req.body.birthDate);

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