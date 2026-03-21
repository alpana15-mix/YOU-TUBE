import React,{useEffect,useState} from "react"
import axios from "axios"
import { useSelector } from "react-redux"

import { FaUserCircle } from "react-icons/fa"
import { AiOutlineLike } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { MdDelete } from "react-icons/md"

import timeAgo from "../../utils/timeAgo.js"

export default function CommentSection({videoId}){

const [comments,setComments] = useState([])
const [text,setText] = useState("")
const [editId,setEditId] = useState(null)

const {userData} = useSelector((state)=>state.user)


// FETCH COMMENTS
const fetchComments = async()=>{
const res = await axios.get(
`http://localhost:8000/api/comment/${videoId}`
)
setComments(res.data)
}

useEffect(()=>{
fetchComments()
},[videoId])


// ADD COMMENT
const addComment = async()=>{

if(!text.trim()) return

await axios.post(
"http://localhost:8000/api/comment",
{
videoId: String(videoId),   
text: text.trim()
},
{ withCredentials:true } 
)

setText("")
fetchComments()
}


// DELETE COMMENT
const deleteComment = async(id)=>{

await axios.delete(
`http://localhost:8000/api/comment/${id}`,
{ withCredentials:true }
)

fetchComments()
}


// EDIT COMMENT
const updateComment = async()=>{

await axios.put(
`http://localhost:8000/api/comment/${editId}`,
{
text: text.trim()
},
{ withCredentials:true }
)

setEditId(null)
setText("")
fetchComments()
}


// LIKE (UI only)
const likeComment = (id)=>{
setComments(prev =>
prev.map(c =>
c._id === id
? {...c,likes:(c.likes||0)+1}
:c
)
)
}


return(

<div className="mt-6">

<h2 className="text-lg font-semibold mb-4">
Comments ({comments.length})
</h2>


{/* ADD COMMENT */}

<div className="flex gap-3 mb-6">

{userData?.photoUrl ?
<img src={userData.photoUrl} className="w-9 h-9 rounded-full"/>
:
<FaUserCircle size={36}/>
}

<input
type="text"
placeholder="Add a comment..."
value={text}
onChange={(e)=>setText(e.target.value)}
className="flex-1 bg-[#272727] p-2 rounded outline-none"
/>

<button
onClick={editId ? updateComment : addComment}
className="bg-blue-600 px-4 py-2 rounded"
>
{editId ? "Update" : "Post"}
</button>

</div>


{/* COMMENT LIST */}

<div className="space-y-4">

{comments.map((c)=>(

<div key={c._id} className="flex gap-3">

{c.userId?.photoUrl ?
<img src={c.userId.photoUrl} className="w-9 h-9 rounded-full"/>
:
<FaUserCircle size={35}/>
}

<div className="flex-1">

<p className="text-sm font-semibold">

{c.userId?.userName || "User"}   {/* USERNAME */}

<span className="text-gray-400 text-xs ml-2">
{timeAgo(c.createdAt)}
</span>

</p>

<p className="text-gray-300">
{c.text}
</p>


{/* ACTIONS */}

<div className="flex gap-4 mt-1 text-sm text-gray-400">

<button
className="flex items-center gap-1"
onClick={()=>likeComment(c._id)}
>
<AiOutlineLike/>
{c.likes || 0}
</button>


{/* ONLY OWNER */}

{userData?._id === c.userId?._id && (

<>
<button
className="flex items-center gap-1"
onClick={()=>{
setEditId(c._id)
setText(c.text)
}}
>
<FiEdit/>
Edit
</button>

<button
className="flex items-center gap-1 text-red-400"
onClick={()=>deleteComment(c._id)}
>
<MdDelete/>
Delete
</button>
</>

)}

</div>

</div>

</div>

))}

</div>

</div>

)
}