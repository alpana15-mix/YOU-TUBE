import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async ()=>{

    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connect DB")
    }catch(error){
        console.log(error.message)
    }
}
export default connectDb