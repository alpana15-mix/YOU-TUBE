import React from "react"
import { useNavigate } from "react-router-dom"

export default function SuggestionVideo({video}){

const navigate = useNavigate()

return(

<div className="flex gap-3 mb-4 cursor-pointer hover:bg-[#272727] p-2 rounded-lg "
onClick={()=>navigate(`/video/${video._id}`)}
>

<img
src={video.thumbnailUrl}
className="w-40 h-24 object-cover rounded"
/>

<div>

<p className="text-sm font-semibold line-clamp-2">
{video.title}
</p>

<p className="text-xs text-gray-400">
{video.channelName}
</p>

<p className="text-xs text-gray-400">
{video.views} views
</p>

</div>

</div>

)
}