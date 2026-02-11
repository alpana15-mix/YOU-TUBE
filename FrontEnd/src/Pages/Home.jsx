import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/Youtube_logo.png"

import {FaBars, FaUserCircle, FaHome, FaHistory, FaList,
     FaThumbsUp, FaSearch, FaMicrophone, FaTimes,} from "react-icons/fa"
import {IoIosAddCircle} from "react-icons/io";
import {GoVideo} from "react-icons/go";
import {SiYoutubeshorts} from "react-icons/si";
import {MdOutlineSubscriptions} from "react-icons/md";

function Home(){
    const [sidebarOpen,setSidebarOpen]=useState(true)
    const [selectedItem, setSelectedItem]=useState("Home")
    return(
        <div className="bg-[#0f0f0f]  text-white min-h-screen relative">
        
        {/*navbar*/}
        <header className="bg-[#0f0f0f] h-15 p-3 border-b border-gray-800  fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between">
                {/*left*/}
                <div className="flex items-center gap-4">
                    <button className="text-xl bg-[#272727] p-2 rounded-full md:inline 
                    hidden" onClick={()=>setSidebarOpen(!sidebarOpen)}>
                        <FiAlignJustify />
                    </button>
                    <div className="flex items-center gap-1.25">
                        <img src={logo} alt="" className="w-7.5"/>
                        <span className="text-white font-bold text-xl tracking-tight font-roboto">YouTube</span>
                    </div>

                </div>

                {/* search bar */}
                <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl">
                    <div className="flex flex-1">
                        <input type="text" className="flex-1 bg-[#121212] px-4 py-2 rounded-l-full outline-none
                         border border-gray-700" placeholder="Search"/>
                        <button className="bg-[#272727] px-4 rounded-r-full border-gray-700"><FaSearch /></button>
                    </div>
                    <button className="bg-[#272727] p-3 rounded-full">
                        <FaMicrophone/>
                    </button>
                </div>

                {/* right */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:flex items-center gap-1 bg-[#272727] px-3 
                    py-1 rounded-full cursor-pointer">
                        <span className="text-lg">+</span>
                        <span className="">Create</span>
                    </button>
                    < FaUserCircle className="text-3xl hidden md:flex text-gray-400"/>
                    <FaSearch className="text-lg md:hidden flex"/>
                </div>
            </div>
        </header>

        {/* sideBar */}

        <aside className={`bg-[#0f0f0f] border-r border-gray-800 
            transition-all duration-300 fixed top-15 bottom-0 z-40 
            ${sidebarOpen? "w-60" :"w-20"} hidden md:flex flex-col overflow-y-auto`}>

           <nav className="space-y-1 mt-3">
            <SidebarItem icon={< FaHome/>} text={"Home"} open ={sidebarOpen} 
            selected={selectedItem==="Home"} onClick={()=>setSelectedItem("Home")}/>

            <SidebarItem icon={< SiYoutubeshorts/>} text={"Shorts"} open ={sidebarOpen} 
            selected={selectedItem==="Shorts"} onClick={()=>setSelectedItem("Shorts")}/>

            <SidebarItem icon={<MdOutlineSubscriptions/>} text={"Subscriptions"} open ={sidebarOpen} 
            selected={selectedItem==="Subscriptions"} onClick={()=>setSelectedItem("Subscriptions")}/>
           </nav>

        </aside>

        </div>
    )
}


function SidebarItem({icon, text, open, selected, onClick}){
    return(
        <button className={`flex items-center gap-4 p-2 rounded 
        w-full transition-colors ${open ? "justify-start" : "justify-center"} 
        ${selected ? "bg-[#272727]": "hover:bg-[#272727]"}`} onClick={onClick}> 
            <span className="text-lg">{icon}</span>
            {open && <span className="text-sm">{text}</span>} 
        </button>
    )
}


export default Home