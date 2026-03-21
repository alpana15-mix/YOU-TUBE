import Comment from "../model/Comment.js"

// GET COMMENTS
export const getComments = async (req,res)=>{
try{
const comments = await Comment.find({videoId:req.params.videoId})
.populate("userId","userName photoUrl")

res.json(comments)
}catch(err){
res.status(500).json(err)
}
}


// ADD COMMENT
export const addComment = async (req,res)=>{
try{
const newComment = new Comment({
videoId:req.body.videoId,
userId: req.userId,
text:req.body.text
})

await newComment.save()

res.status(200).json("Comment added")
}catch(err){
res.status(500).json(err)
}
}


// DELETE COMMENT
export const deleteComment = async (req,res)=>{
try{

const comment = await Comment.findById(req.params.id)

if(comment.userId.toString() !== req.userId){
return res.status(403).json("You can delete only your comment")
}

await comment.deleteOne()

res.json("Comment deleted")

}catch(err){
res.status(500).json(err)
}
}


// EDIT COMMENT
export const editComment = async (req,res)=>{
try{

const comment = await Comment.findById(req.params.id)

if(comment.userId.toString() !== req.userId){
return res.status(403).json("You can edit only your comment")
}

comment.text = req.body.text

await comment.save()

res.json("Comment updated")

}catch(err){
res.status(500).json(err)
}
}