var mongoose = require ('mongoose');

//login Schema
var LoginSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

var Login = module.exports =mongoose.model('Login',LoginSchema);
