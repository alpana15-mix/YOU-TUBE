import React,{useState} from "react"
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai"
import { FiShare, FiDownload } from "react-icons/fi"
import { MdOutlinePlaylistAdd } from "react-icons/md"

export default function VideoActions({video}){

const [likes,setLikes] = useState(video.likes?.length || 0)
const [dislikes,setDislikes] = useState(video.dislikes?.length || 0)

return(

<div className="flex items-center gap-4 flex-wrap">

{/* Like / Dislike Capsule */}

<div className="flex items-center bg-[#272727] rounded-full overflow-hidden">

<button
className="flex items-center gap-2 px-4 py-2 hover:bg-gray-600"
onClick={()=>setLikes(likes+1)}
>
<AiOutlineLike size={18}/>
{likes}
</button>

<div className="w-px bg-gray-500 h-5"></div>

<button
className="px-4 py-2 hover:bg-gray-600"
onClick={()=>setDislikes(dislikes+1)}
>
<div className="flex items-center gap-2">

<AiOutlineDislike size={18}/>
{dislikes}

</div>

</button>

</div>

{/* Share */}

<button className="flex items-center gap-2 bg-[#272727] px-4 py-2 rounded-full hover:bg-gray-600">
<FiShare size={18}/>
Share
</button>

{/* Save */}

<button className="flex items-center gap-2 bg-[#272727] px-4 py-2 rounded-full hover:bg-gray-600">
<MdOutlinePlaylistAdd size={18}/>
Save
</button>

{/* Download */}

<a
href={video.videoUrl}
download
className="flex items-center gap-2 bg-[#272727] px-4 py-2 rounded-full hover:bg-gray-600"
>
<FiDownload size={18}/>
Download
</a>

</div>

)
}