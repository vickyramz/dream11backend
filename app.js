const express = require('express')
const {mangouri} =require('./config')
const mangoose = require('mongoose')
const app=express();
const User =require('./Models/User')
app.use(express.json())

mangoose.connect(mangouri,{},()=>{
    console.log('mangodb connected')
})


//signUp services 
app.post('/signUp',async(req,res)=>{
  const {first_name,last_name,email,age,Password}=req.body;
    const user=User({first_name,last_name,email,age,Password});
    try{
        let data=await user.save();
        res.json(data)
    }catch(error){
        res.json(error)
    }
  
  

});
//Post req
app.get('/getUser',async(req,res)=>{
   
    try{
        const userList= await User.find();
        res.json({result:userList});

    }catch(error){
    res.json(error);
    }
  });
app.listen(5282);