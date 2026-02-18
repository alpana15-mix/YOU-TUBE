import React from "react";
import { useSelector } from "react-redux"
import{FiLogOut} from 'react-icons/fi';
import {MdOutlineSwitchAccount} from 'react-icons/md';
import{FcGoogle} from 'react-icons/fc';
import{TiUserAddOutline} from 'react-icons/ti';
import { SiYoutubestudio} from 'react-icons/si';
function MobileProfile(){
    const {userData} = useSelector(state=>state.user)
    return(
        <div className="md:hidden bg-[#0f0f0f] text-white h-full w-full flex flex-col pt-25 p-2.5 ">
            {/*top profile section*/}

          {userData && <div className="p-4 flex items-center gap-4 border-b border-gray-800">
                {userData?.photoUrl && <img src={userData?.photoUrl} alt="" className="w-16 h-16 rounded-full 
                object-cover"/>}
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">{userData?.userName}</span>
                    <span className="text-gray-400 text-sm">{userData?.email}</span>
                    <p className="text-sm text-blue-400 cursor-pointer hover:underline">
                        {userData?.channel ? "view channel" : "create channel"}</p>
                </div>
            </div>}  
            {/* auth button */}
            <div className="flex gap-2 p-4 border-b border-gray-800 overflow-auto">
                <button className="bg-gray-800 text-nowrap px-3 py-1 rounded-2xl text-sm flex items-center
                justify-center gap-2"><FcGoogle className="text-xl"/>SignIn with Google</button>
                 <button className="bg-gray-800 text-nowrap px-3 py-1 rounded-2xl text-sm flex items-center
                justify-center gap-2"><TiUserAddOutline className="text-xl"/>Create new Account</button>
                 <button className="bg-gray-800 text-nowrap px-3 py-1 rounded-2xl text-sm flex items-center
                justify-center gap-2"><MdOutlineSwitchAccount className="text-xl"/>SignIn with your Account</button>
                 <button className="bg-gray-800 text-nowrap px-3 py-1 rounded-2xl text-sm flex items-center
                justify-center gap-2"><SiYoutubestudio className="text-xl text-red-400"/>PT Studio</button>
                 <button className="bg-gray-800 text-nowrap px-3 py-1 rounded-2xl text-sm flex items-center
                justify-center gap-2"><FiLogOut className="text-xl"/>SignOut</button>
            </div>

        </div>
    )
}
export default MobileProfile