const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');
const router = express.Router();
const requireLogin=require('../middleware/reqireLogin')
const User = mongoose.model("User")
const multer = require("multer");
const path = require("path");


// storage engine 

const storage = multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    
})


router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})


router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})



router.post("/upload", upload.single('file'), (req, res) => {
    
    res.json({
        url: `http://localhost:5000/public/${req.file.filename}`
        // url: `/upload/images/${req.file.filename}`
    })
    // console.log(req.file)
    photoUrl=req.file.path;
    console.log(photoUrl)
    
})

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