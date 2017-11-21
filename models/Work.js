var mongoose = require('mongoose')
require('moment');

var WorkSchema = new mongoose.Schema(
    {
        companyName : String,
        position : String,
        startDate : 'Moment',
        endDate :'Moment',
        description : String

    });
module.exports = mongoose.model('work', WorkSchema);