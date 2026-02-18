import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import CustomAlert from "./components/CustomAlert";
import Shorts from "./Pages/Shorts/Shorts.jsx"
import GetCurrentUser from "./customHooks/GetCurrentUser.jsx";
import MobileProfile from "./components/MobileProfile.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";

export const serverUrl ="http://localhost:8000"

function App(){
    GetCurrentUser();
    return(
        <>
        <CustomAlert/>
<Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/shorts" element={<Shorts/>}/>
    <Route path="/mobilepro" element={<MobileProfile/>}/>
    </Route>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/forgetpass" element={<ForgetPassword/>}/>
</Routes>
        </>
    )
}

export default App