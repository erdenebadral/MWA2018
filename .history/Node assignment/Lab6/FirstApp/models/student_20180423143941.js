var mongoose = require('mongoose');
var Schema = mongoose.Schema;
studentSchema = new Schema({
    country:string,
    city:string,
    university:string,
    user_id:number
});

Student = mongoose.model('Student',studentSchema);
module.exports = Student;