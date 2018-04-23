var mongoose = require('mongoose');
var Schema = mongoose.Schema;
userSchema = new Schema({
    userName:string,
    passWord:string,
    type:string,
    fName:string,
    lName:string,
    email:string
});

User = mongoose.model('User',userSchema);
module.exports = User;