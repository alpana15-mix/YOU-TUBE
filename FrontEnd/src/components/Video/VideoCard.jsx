import React from "react"
import { useNavigate } from "react-router-dom"

export default function VideoCard({ video }) {

const navigate = useNavigate()

return (

<div
className="cursor-pointer"
onClick={() => navigate(`/video/${video._id}`)}
>

{/* Thumbnail */}

<img
src={video.thumbnailUrl}
alt="thumbnail"
className="w-full h-44 object-cover rounded-lg transition hover:scale-105"
/>

{/* Video Info */}

<div className="flex gap-3 mt-3">

{/* Channel icon */}

<div className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center text-white">
{video.channelName?.charAt(0)}
</div>

<div>

<h3 className="text-sm font-semibold">
{video.title}
</h3>

<p className="text-xs text-gray-400">
{video.channelName}
</p>

<p className="text-xs text-gray-400">
{video.views} views
</p>

</div>

</div>

</div>

)
}