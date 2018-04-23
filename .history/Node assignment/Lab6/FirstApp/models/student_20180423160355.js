var mongoose = require('mongoose');
var Schema = mongoose.Schema;
studentSchema = new Schema({
    country:String,
    city:String,
    university:String,
    user_id:Number
});

Student = mongoose.model('Student',studentSchema);
module.exports = Student;