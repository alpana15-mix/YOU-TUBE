import React from "react";
import {useSelector} from 'react-redux'

function Profile(){
    const {userData} = useSelector(state=>state.user)
    return(
        <div>
            <div className="absolute right-5 top-10 mt-2 w-72 bg-[#212121] text-white rounded-xl shadow-lg z-50">
                {userData && <div className="flex items-center gap-3 p-4 border-b border-gray-700">
                    <img src={userData?.photoUrl} alt="" className="w-12 h-12 flex items-center justify-center rounded-full
                     object-cover border border-gray-700"/>

                    <div>
                        <h4 className="font-semibold">{userData?.userName}</h4>
                        <p className="text-sm text-gray-400">{userData?.email}</p>
                        <p className="text-sm text-blue-400 cursor-pointer hover:underline">
                            {userData?.channel ? "view channel" : "create channel"}</p>
                    </div>

                </div>}
            </div>
        </div>
    )
}

export default Profile