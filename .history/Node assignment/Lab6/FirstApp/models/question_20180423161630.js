var mongoose = require('mongoose');
var Schema = mongoose.Schema;
questionSchema = new Schema({
    field:[String],
    question_type:String,
    title:String,
    answers:[String],
    correct_answers:[String],
    score:Number
});

Question = mongoose.model('Question',studentSchema);
module.exports = Question;