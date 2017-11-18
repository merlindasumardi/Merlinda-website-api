var mongoose = require('mongoose');

var AboutMeSchema = new mongoose.Schema(
    {
        fullname: String,
        email: String,
        phone: Number,
        birthPlace: String,
        birthDate: Date,
        website: String,
        address: String,
        bio: String

    });

module.exports = mongoose.model('aboutMe', AboutMeSchema);