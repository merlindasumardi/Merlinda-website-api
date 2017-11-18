var mongoose = require('mongoose');

var WorkSchema = new mongoose.Schema(
    {
        companyName : String,
        position : String,
        startDate : Date,
        endDate : Date,
        description : String

    });
module.exports = mongoose.model('work', WorkSchema);