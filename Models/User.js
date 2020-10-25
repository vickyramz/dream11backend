const mongoose = require('mongoose');
const {model,Schema}=require('mongoose');

const userSchema=new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    email:{type:String,required:true},
    age:{type:String,required:true},
    Password:{type:String,required:true}
});

const User=model("User",userSchema)
module.exports=User;