const express=require('express')
const router=express.Router()

const User=require('../models/User')


router.post("/add",(req,res)=>{
    const {name,email,phone}=req.body
    const newUser=new User({
        name,email,phone
    })
    newUser.save()
    .then(User=>res.send(User))
    .catch(err=>console.log(err))
})


router.get("/",(req,res)=>{
    User.find()
    .then(User=>res.send(User))
    .catch(err=>console.log(err))
})


router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    User.findOne({_id})
      .then(Users=>res.send(Users))
    .catch(err=>console.log(err))
})



router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    User.findOneAndDelete({_id:_id})
    .then(User=>res.send( 'User has been deleted '))
    .catch(err=>console.log(err))
})


router.put("/:_id",(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    User.findOneAndUpdate({_id},{$set:{name,email,phone}})
    .then(User=>res.send("User Updated"))
    .catch(err=>console.log(err))
})

module.exports=router