import mongoose from "mongoose"

const replySchmema = new mongoose.Schema({
     author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date}

},{_id:true})

const commentSchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    message:{
        type:String,
        required:true
    },
    replies:{replySchmema},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date}
},{_id:true})

const postSchema = new mongoose.Schema({
    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel",
        required:true
    },
    content:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
   image:{
    type:String
   },
    
    comments:{commentSchema}
})

const Post = mongoose.model("Post",postSchema)
export default Short