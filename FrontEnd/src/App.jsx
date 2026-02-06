import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

export const serverUrl ="http://localhost:8000"

function App(){
    return(
        <>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
</Routes>
        </>
    )
}

export default App