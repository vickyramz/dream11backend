const mongoose = require('mongoose');
const {model,Schema}=require('mongoose');

const userSchema=new Schema({
    userName:{type:String,required:true},
    Password:{type:String,required:true}
});

const User=model("User",userSchema)
module.exports=User;