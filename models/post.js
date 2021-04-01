
var mongoose = require('mongoose');
//Set up default mongoose connection
const {ObjectId} = mongoose.Schema.Types

const postSchema=new mongoose.Schema({
    title:{
    type:String,
    require:true
    },
    body:{
        type:String,
        require:true,
    },
    photo:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId,ref:"User"}],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports = posts =mongoose.model("Post",postSchema)