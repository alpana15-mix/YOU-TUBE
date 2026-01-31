import uploadOnCloudinary from "../config/cloudinary.js";
import User from "../model/userModel.js";
import validator from 'validator';
import bcrypt from "bcryptjs";

export const signUp = async (req, res)=>{
    try{
        const {userName, email , password} = req.body
        let photoUrl
        if(req.file){
            photoUrl = await uploadOnCloudinary(req.file.path)
        }
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User is already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid Email"}) 
        }
        if(password.length < 8){
             return res.status(400).json({message:"Enter Strong password"})
        }
        const hashPassword = await bcrypt.hash(password,10)

        const user = await User.create(
            {
                userName,
                email,
                password:hashPassword,
                photoUrl
            }
        )
    } catch(error){
        console.log(error);
    }
}