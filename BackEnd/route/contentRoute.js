import express from "express"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"
import { createVideo } from "../controller/videoController.js"

const contentRouter = express.Router()

// Video Routes
contentRouter.post("/create-video", isAuth, upload.fields([
    {name:"Video" , maxCount:1},
    {name:"thumbnail", maxCount:1}
]),createVideo)

export default contentRouter