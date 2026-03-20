import React, {useState} from "react"
import axios from "axios"

export default function LikeDislike({video}){

const [likes,setLikes] = useState(video.likes)
const [dislikes,setDislikes] = useState(video.dislikes)


const handleLike = async()=>{

try{

await axios.put(`http://localhost:8000/api/video/like/${video._id}`)

setLikes(likes+1)

}catch(err){

console.log(err)

}

}


const handleDislike = async()=>{

try{

await axios.put(`http://localhost:8000/api/video/dislike/${video._id}`)

setDislikes(dislikes+1)

}catch(err){

console.log(err)

}

}


return(

<div className="flex gap-4">

<button
onClick={handleLike}
className="bg-[#272727] px-4 py-1 rounded"
>
👍 {likes}
</button>

<button
onClick={handleDislike}
className="bg-[#272727] px-4 py-1 rounded"
>
👎 {dislikes}
</button>

</div>

)

}