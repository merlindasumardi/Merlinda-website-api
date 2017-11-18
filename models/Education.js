var mongoose = require('mongoose');

var EducationSchema = new mongoose.Schema(
    {
        title: String,
        school: String,
        yearIn: Number,
        yearOut: Number,
        gpa: Number,
        description: String
    });

module.exports = mongoose.model('education', EducationSchema);