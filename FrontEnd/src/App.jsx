import React, { Children } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import CustomAlert, { showCustomAlert } from "./components/CustomAlert";
import Shorts from "./Pages/Shorts/Shorts.jsx"
import GetCurrentUser from "./customHooks/GetCurrentUser.jsx";
import MobileProfile from "./components/MobileProfile.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import CreateChannel from "./Pages/Channel/CreateChannel.jsx";
import ViewChannel from "./Pages/Channel/ViewChannel.jsx";
import GetChannelData from "./customHooks/GetChannelData.jsx";
import UpdateChannel from "./Pages/Channel/UpdateChannel.jsx";
import { useSelector } from "react-redux";
import CreatePage from "./Pages/CreatePage.jsx";
import { useEffect } from "react";
import CreateVideo from "./Pages/Videos/CreateVideo.jsx";
import CreateShort from "./Pages/Shorts/CreateShort.jsx";
import CreatePlaylist from "./Pages/Playlist/CreatePlaylist.jsx";
import CreatePost from "./Pages/Post/CreatePost.jsx";
import VideoPage from "./Pages/VideoPage.jsx";
import HomeFeed from "./Pages/HomeFeed.jsx";

export const serverUrl ="http://localhost:8000"


const ProtectRout = ({userData, children})=>{

    useEffect(()=>{
        if(!userData){
        showCustomAlert("Please sign up first to use this feature!")

    }
    },[userData]);

    if(!userData){
                return <Navigate to={"/"} replace/>
    }
    
    return children;
};

function App(){

        GetCurrentUser();
        GetChannelData();
    
    

    const {userData} = useSelector(state=>state.user)
    
    return(
        <>
        <CustomAlert/>

<Routes>
    <Route path="/" element={<Home/>}>
    <Route index element={<ProtectRout userData={userData}><HomeFeed/></ProtectRout>}/>
    <Route path="video/:id" element={<ProtectRout userData={userData}><VideoPage/></ProtectRout>}/>
    <Route path="/shorts" element={<ProtectRout userData={userData}><Shorts/></ProtectRout>}/>
    <Route path="/mobilepro" element={<ProtectRout userData={userData}><MobileProfile/></ProtectRout>}/>
    <Route path="/viewchannel" element={<ProtectRout userData={userData}><ViewChannel/></ProtectRout>}/>
    <Route path="/updatechannel" element={<ProtectRout userData={userData}><UpdateChannel/></ProtectRout>}/>
    <Route path="/create" element={<ProtectRout userData={userData}><CreatePage/></ProtectRout>}/>
    <Route path="/createvideo" element={<ProtectRout userData={userData}><CreateVideo/></ProtectRout>}/>
    <Route path="/createshort" element={<ProtectRout userData={userData}><CreateShort/></ProtectRout>}/>
    <Route path="/createplaylist" element={<ProtectRout userData={userData}><CreatePlaylist/></ProtectRout>}/>
    <Route path="/createpost" element={<ProtectRout userData={userData}><CreatePost/></ProtectRout>}/>
    </Route>
    <Route path="/signup" element={<SignUp/>}/> 
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/forgetpass" element={<ForgetPassword/>}/>
    <Route path="/createchannel" element={<CreateChannel/>}/>
</Routes>
        </>
    )
}

export default App