import Video from "../model/Video.js"


// CREATE VIDEO (Upload)

export const createVideo = async (req, res) => {

try {

const videoFile = req.files?.Video?.[0]
const thumbnailFile = req.files?.thumbnail?.[0]

if (!videoFile || !thumbnailFile) {
return res.status(400).json({
message: "Video and thumbnail are required"
})
}

const newVideo = await Video.create({

title: req.body.title,
description: req.body.description,
channelName: req.body.channelName,

videoUrl: videoFile.path,
thumbnailUrl: thumbnailFile.path,

likes: 0,
dislikes: 0,
views: 0

})

res.status(201).json(newVideo)

} catch (error) {

console.log(error)

res.status(500).json({
message: "Video upload failed"
})

}

}



// GET ALL VIDEOS (HomeFeed)

export const getAllVideos = async (req, res) => {

try {

const videos = await Video.find().sort({ createdAt: -1 })

res.json(videos)

} catch (error) {

res.status(500).json(error)

}

}



// GET SINGLE VIDEO

export const getVideo = async (req, res) => {

try {

const video = await Video.findById(req.params.id)

res.json(video)

} catch (error) {

res.status(500).json(error)

}

}



// SUGGESTION VIDEOS

export const getSuggestions = async (req, res) => {

try {

const videos = await Video.find({
_id: { $ne: req.params.id }
}).limit(10)

res.json(videos)

} catch (error) {

res.status(500).json(error)

}

}



// LIKE VIDEO

// export const likeVideo = async (req, res) => {

// try {

// const video = await Video.findById(req.params.id)

// video.likes += 1

// await video.save()

// res.json(video)

// } catch (error) {

// res.status(500).json(error)

// }

// }

export const likeVideo = async (req,res)=>{

const video = await Video.findById(req.params.id)

const userId = req.body.userId

if(video.likes.includes(userId)){

video.likes.pull(userId)

}else{

video.likes.push(userId)
video.dislikes.pull(userId)

}

await video.save()

res.json(video)

}

// DISLIKE VIDEO

// export const dislikeVideo = async (req, res) => {

// try {

// const video = await Video.findById(req.params.id)

// video.dislikes += 1

// await video.save()

// res.json(video)

// } catch (error) {

// res.status(500).json(error)

// }

// }
export const dislikeVideo = async (req,res)=>{

const video = await Video.findById(req.params.id)

const userId = req.body.userId

if(video.dislikes.includes(userId)){

video.dislikes.pull(userId)

}else{

video.dislikes.push(userId)
video.likes.pull(userId)

}

await video.save()

res.json(video)

}

