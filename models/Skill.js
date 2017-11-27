var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema(
    {
        skillName : String,
        skillCategory : String,
        skillScore : Number
    });

module.exports = mongoose.model('skill', SkillSchema);