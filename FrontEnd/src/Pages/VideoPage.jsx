import React,{useEffect,useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import VideoActions from "../components/VideoActions"
import SuggestionVideo from "../components/SuggestionVideo"
import CommentSection from "../components/CommentSection"
import formatViews from "../../utils/formatViews"

export default function VideoPage(){

const {id} = useParams()

const [video,setVideo] = useState(null)
const [suggestions,setSuggestions] = useState([])

useEffect(()=>{

const fetchVideo = async()=>{
const res = await axios.get(`http://localhost:8000/api/video/${id}`)
setVideo(res.data)
}

const fetchSuggestions = async()=>{
const res = await axios.get(`http://localhost:8000/api/video/suggestions/${id}`)
setSuggestions(res.data)
}

fetchVideo()
fetchSuggestions()

},[id])

if(!video) return <p className="text-white p-5">Loading...</p>

return(

<div className="flex gap-6 p-4">

{/* LEFT SECTION */}

<div className="flex-1">

{/* VIDEO PLAYER */}

<video
src={video.videoUrl}
controls
autoPlay={true}
muted
className="w-full rounded-lg"
/>

{/* TITLE */}

<h1 className="text-xl font-semibold mt-3">
{video.title}
</h1>

{/* CHANNEL + ACTIONS */}

<div className="flex justify-between items-center mt-4 flex-wrap gap-4">

<div className="flex items-center gap-3">

{/* Avatar */}

<div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white">
{video.channelName?.charAt(0)}
</div>

<div>

<p className="font-medium">
{video.channelName}
</p>

<p className="text-sm text-gray-400">
{video.views} views • 2 days ago
</p>

</div>

<button className="ml-4 bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700">
Subscribe
</button>

</div>

<VideoActions video={video}/>

</div>

{/* DESCRIPTION */}

<div className="bg-[#272727] p-3 rounded-lg mt-4">

<p className="text-sm text-gray-300">
{video.description}
</p>

</div>

{/* COMMENTS */}

<CommentSection videoId={id}/>

</div>


{/* RIGHT SIDE SUGGESTIONS */}

<div className="w-90 hidden lg:block">

{suggestions.map((v)=>(
<SuggestionVideo key={v._id} video={v}/>
))}

</div>

</div>

)
}