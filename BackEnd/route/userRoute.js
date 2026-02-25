import express from "express"
import isAuth from "../middleware/isAuth.js"
import { createChannel, getChannelData, getCurrentUser } from "../controller/userController.js"
import upload from "../middleware/multer.js"




const userRouter = express.Router()

userRouter.get("/getuser", isAuth, getCurrentUser)
userRouter.post("/createchannel",  upload.fields([
    {name: "avatar", maxCount : 1},
    {name: "banner", maxCount : 1}
]),isAuth , createChannel);

userRouter.get("/getchannel",isAuth,getChannelData)

export default userRouter