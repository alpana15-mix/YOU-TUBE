import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

const GetCurrentUser = ()=>{
    const dispatch = useDispatch()

useEffect(()=>{
    const fetchUser = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/user", {withCredentials:true})
            dispatch(setUserData(result.data))
            console.log(result.data)
        } catch (error) {
            console.log(error)
            dispatch(setUserData(null))
        }
    }
    fetchUser()
},[])
}

export default GetCurrentUser