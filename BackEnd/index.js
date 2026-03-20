import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./route/authRoute.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import userRouter from "./route/userRoute.js"
import contentRouter from "./route/contentRoute.js"

import videoRouter from "./route/video.js"
import commentRouter from "./route/comment.js"
dotenv.config()

const port = process.env.PORT || 8000;

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",authRouter)

app.use("/api/user", userRouter)
app.use("/api/content",contentRouter)

app.use("/api/video",videoRouter)

app.use("/api/comment",commentRouter)

app.listen(port , ()=>{
    console.log(`Server running on port ${port}`)
    connectDb()
})