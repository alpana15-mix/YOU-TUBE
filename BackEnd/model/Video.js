import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({

title:String,

description:String,

videoUrl:String,

thumbnailUrl:String,

channelName:String,

likes:{
type:Number,
default:0
},

dislikes:{
type:Number,
default:0
}

},{timestamps:true})

export default mongoose.model("Video",videoSchema)