import Comment from "../model/Comment.js"

export const getComments = async(req,res)=>{

const comments = await Comment.find({
videoId:req.params.videoId
}).populate("userId","username")

res.json(comments)

}


export const addComment = async(req,res)=>{

const comment = new Comment(req.body)

await comment.save()

res.json(comment)

}


export const deleteComment = async(req,res)=>{

await Comment.findByIdAndDelete(req.params.id)

res.json("deleted")

}


export const editComment = async(req,res)=>{

const comment = await Comment.findByIdAndUpdate(
req.params.id,
{text:req.body.text},
{new:true}
)

res.json(comment)

}