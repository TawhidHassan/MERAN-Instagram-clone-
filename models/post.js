
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
        default:"no photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

module.exports = posts =mongoose.model("Post",postSchema)