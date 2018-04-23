var mongoose = require('mongoose');
var Schema = mongoose.Schema;
contestSchema = new Schema({
    start_date:Date,
    end_date:Date,
    created_user:Number,
    students:[{
        registration_id:String,
        user_id:Number,
        registration_date:Date,
        total_score:Number,
        submission:[{
            question_id:Number,
            answers:[String],
            score:Number
        }]
    }],
    questions:[Number]

});

Contest = mongoose.model('Contest',studentSchema);
module.exports = Contest;