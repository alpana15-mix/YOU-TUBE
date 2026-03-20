import axios from "axios"
import { useState } from "react"
import { serverUrl } from "../../App"
import { showCustomAlert } from "../../components/CustomAlert"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { ClipLoader } from "react-spinners"

function CreateVideo(){
    const {channelData}= useSelector(state=>state.user)
    const [videoUrl,setVideoUrl] = useState(null)
    const [thumbnail,setThumbnail] = useState(null)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [tags,setTags] = useState("")
    const [loading,setLoading]=useState(false)
    const navigate = useNavigate()

const handleVideo=(e)=>{
    setVideoUrl(e.target.files[0])
}

const handleThumbnail=(e)=>{
    console.log("thumbnail function is calling")
    const file = e.target.files[0]
    if(file){
        setThumbnail(file)
    }
}

const handleUpload=async()=>{
    setLoading(true)
    const formData  = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("tags", JSON.stringify(tags? tags.split(",").map(tag => tag.trim()) : []))
    formData.append("video", videoUrl)
    formData.append("thumbnail", thumbnail)
    formData.append("channelId",channelData?._id)
    try {
        const result = await axios.post(serverUrl + "/api/content/create-video", formData, {withCredentials:true})
        console.log(result.data)
        showCustomAlert("Upload Video Successfully")
        setLoading(false)
        navigate("/")
    } catch (error) {
        console.log(error)
        showCustomAlert(error.response.data.message)
        setLoading(false)
    }
}

    return(
        
        <div className="w-full min-h-screen bg-[#0f0f0f] text-white flex 
        flex-col pt-5">
            <div className="flex flex-1 justify-center items-center px-4 py-6">
                <div className="bg-[#212121] p-6 rounded-xl w-full max-w-2xl shadow-lg space-y-6 ">
                {/* uploadVideo */}
                <label htmlFor="video" className="cursor-pointer border-2  border-dashed border-gray-600
                 rounded-lg flex flex-col items-center justify-center p-1 hover:border-red-500 transition">
                    <input type="file" id="video" className="w-full p-3 rounded-lg bg-[#121212] border
                    border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" 
                    onChange={handleVideo} accept="video/*"/>
                </label>

                 <input type="text" placeholder="title*" onChange={(e)=>setTitle(e.target.value)} value={title} className="w-full p-3 rounded-lg bg-[#121212] border
                    border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:outline-none"/>


                    <textarea placeholder="description*" onChange={(e)=>setDescription(e.target.value)} value={description} className="w-full p-3 rounded-lg bg-[#121212] border
                    border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:outline-none"/>
                
                 <input type="text" placeholder="tags*" className="w-full p-3 rounded-lg bg-[#121212] border
                    border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" onChange={(e)=>setTags(e.target.value)} value={tags}/>


                    {/* upload Thumbnail */}
                    <label htmlFor="thumbnail" className="block cursor-pointer">

                        {thumbnail?
                        (<img src={URL.createObjectURL(thumbnail)} 
                        className="w-full rounded-lg border border-gray-700 mb-2 object-cover"/>)
                        :
                        (<div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center
                             text-gray-400 border border-gray-700 mb-2">Click to Upload thumbnail</div>)

                        }

                        <input type="file" id="thumbnail" className="" onChange={handleThumbnail} accept='image/*'/>
                    </label>

                    <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg
                     font-medium disabled:bg-gray-600 flex items-center justify-center" 
                     disabled ={!title || !description || !tags || !videoUrl || !thumbnail || loading} onClick={handleUpload}>{loading? <ClipLoader color="black" size={20}/>:"Upload Video"}</button>
                    {loading && <p className="text-center text-gray-300 text-sm animate-pulse">Video Uploading... Please wait...</p>}
  
                </div>
            </div>
        </div>
    )
}
export default CreateVideo