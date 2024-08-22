const mongoose = require('mongoose');

const schema = mongoose.Schema({
    FacultyID : Number,
    FacultyName : String,
    FacultyInitial : String,
});

module.exports = mongoose.model('Faculty',schema);