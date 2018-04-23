var mongoose = require('mongoose');
var User = require("./user");
var Schema = mongoose.Schema;
studentSchema = new Schema({
    country:string,
    city:string,
    university:string,
    UID:{type:Schema.Types.ObjectId, ref: 'User'}
});

Student = mongoose.model('Student',studentSchema);
module.exports = Student;