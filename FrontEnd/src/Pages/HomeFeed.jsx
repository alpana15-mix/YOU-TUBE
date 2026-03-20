import { useOutletContext } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"
import VideoCard from "../components/Video/VideoCard"

export default function HomeFeed() {

const [videos,setVideos] = useState([])
const {search,category} = useOutletContext()

useEffect(()=>{

const fetchVideos = async ()=>{

try{

const res = await axios.get("http://localhost:8000/api/video")

setVideos(res.data)

}catch(err){

console.log(err)

}

}

fetchVideos()

},[])

const filteredVideos = videos.filter((video)=>{

const matchSearch =
video.title?.toLowerCase().includes(search.toLowerCase())

const matchCategory = category
? video.category?.toLowerCase() === category.toLowerCase()
: true

return matchSearch && matchCategory

})

return (

<div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{filteredVideos.map((video)=>(
<VideoCard key={video._id} video={video}/>
))}

</div>

)

}