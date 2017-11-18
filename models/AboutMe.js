var mongoose = require('mongoose');

var AboutMeSchema = new mongoose.Schema(
    {
        title: String,
        subtitle: String,
        fullname: String,
        email: String,
        phone: Number,
        birthPlace: String,
        birthDate: Date,
        website: String,
        address: String,
        bio: String,
        photo: String

    });

module.exports = mongoose.model('aboutMe', AboutMeSchema);