import express from "express"
import Video from "../model/Video.js"

import {
getVideo,
getSuggestions,
likeVideo,
dislikeVideo
} from "../controller/videoController.js"

const router = express.Router()


// GET ALL VIDEOS (HomeFeed)

router.get("/", async (req,res)=>{

try{

const videos = await Video.find().sort({createdAt:-1})

res.json(videos)

}catch(err){

res.status(500).json(err)

}

})


// SUGGESTION VIDEOS  ⚠️ MUST BE ABOVE :id

router.get("/suggestions/:id", getSuggestions)


// GET SINGLE VIDEO

router.get("/:id", getVideo)


// LIKE VIDEO

router.put("/like/:id", likeVideo)


// DISLIKE VIDEO

router.put("/dislike/:id", dislikeVideo)


export default router