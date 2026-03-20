import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({

videoId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Video"
},

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

text:String

},{timestamps:true})

export default mongoose.model("Comment",commentSchema)