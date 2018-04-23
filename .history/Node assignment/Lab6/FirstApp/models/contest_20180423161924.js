var mongoose = require('mongoose');
var Schema = mongoose.Schema;
contestSchema = new Schema({
    field:String,
    start_date:Date,
    end_date:Date,
    created_user:Number,
    students:[{
        registration_id:String,
        registration_date:Date,
        user_id:Number,
        total_score:Number,
        submission_date:Date,
        submission:[{
            question_id:Number,
            answers:[String],
            score:Number
        }]
    }],
    questions:[Number],
    status:String

});

Contest = mongoose.model('Contest',studentSchema);
module.exports = Contest;