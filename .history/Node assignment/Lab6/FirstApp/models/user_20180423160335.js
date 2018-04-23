var mongoose = require('mongoose');
var Schema = mongoose.Schema;
userSchema = new Schema({
    userName:String,
    passWord:String,
    type:String,
    first_name:String,
    last_name:String,
    email:String
});

User = mongoose.model('User',userSchema);
module.exports = User;