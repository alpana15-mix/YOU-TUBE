import express from "express"
import isAuth from "../middleware/isAuth.js"
import { createChannel, getCurrentUser } from "../controller/userController.js"
import { matches } from "validator"


const userRouter = express.Router()

userRouter.get("/getuser", isAuth, getCurrentUser)
userRouter.post("/createchannel", isAuth , upload.fields[
    {name: "avatar", maxCount:1},
    {name: "banner", maxCount:1}
], createChannel)

export default userRouter