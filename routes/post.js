const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');
const router = express.Router();
const requireLogin=require('../middleware/reqireLogin')
const User = mongoose.model("User")


router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,pic} = req.body 
    if(!title || !body || !pic){
        return  res.status(422).json({error:"Plase add all the fields"})
      }

    //   console.log(req.user)
    // res.send("ok");
     const post=new Post ({
        title,
        body,
        photo:pic,
        postedBy:req.user
     })

     post.save().then(result=>{
        res.json({post:result})
     })
     .catch(err=>{
        console.log(err)
    })

})


module.exports=router