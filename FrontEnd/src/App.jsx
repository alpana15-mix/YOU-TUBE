import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import CustomAlert from "./components/CustomAlert";
import Shorts from "./Pages/Shorts/Shorts.jsx"
import GetCurrentUser from "./customHooks/GetCurrentUser.jsx";

export const serverUrl ="http://localhost:8000"

function App(){
    GetCurrentUser();
    return(
        <>
        <CustomAlert/>
<Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/shorts" element={<Shorts/>}/>
    </Route>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
</Routes>
        </>
    )
}

export default App