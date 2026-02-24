import { useSelector } from "react-redux"
import logo from "../../assets/Youtube_logo.png"
import { useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { serverUrl } from "../../App"
import { showCustomAlert } from "../../components/CustomAlert"
import { ClipLoader } from "react-spinners"
function CreateChannel(){
    const {userData} = useSelector(state=>state.user)
    const [step,setStep]=useState(1)
    const [avatar, setAvatar]=useState(null)
    const [banner, setBanner]=useState(null)
    const [channelName,setChannelName]=useState("")
    const [discription, setDiscription]=useState("")
    const [category, setCategory]=useState("")
    const [loading,setLoading]=useState(false)
     const navigate = useNavigate()


    const handleCreateChannel = async () => {
        const formData = new FormData()
        formData.append("name",channelName)
        formData.append("discription",discription)
        formData.append("category",category)
        formData.append("avatar",avatar)
        formData.append("banner",banner)
        setLoading(true)
        try {
            console.log(channelName,discription,category);
            const result = await axios.post(serverUrl + "/api/user/createchannel", formData, 
            {withCredentials:true})
            setLoading(false)
            console.log(result.data)
            showCustomAlert("Channel Created")
            navigate("/")
        } catch (error) {
             setLoading(false)
            console.log(error)
            showCustomAlert("Channel Create error ")
        }
    }

    const handleAvatar = (e)=>{
        setAvatar(e.target.files[0])
    }


    const handleBanner = (e)=>{
        setBanner(e.target.files[0])
    }

const nextstep = ()=>{setStep((prev)=>prev+1)}
const priviouststep =()=>{setStep((prev)=>(prev > 1 ? prev- 1 : prev));}

    return(
        <div className="w-full min-h-screen bg-[#0f0f0f] text-white flex flex-col">
            <header className=" flex justify-between items-center px-6 py-3 border-b border-gray-800 ">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-8 h-8 object-cover"/>
                    <span className="text-white font-bold text-xl tracking-tight font-roboto">YouTube</span>
                </div>
                <div className="flex items-center gap-3">
                    <img src={userData?.photoUrl} alt="" className="w-9 h-9 rounded-full object-cover"/>
                </div>
            </header>
            <main className="flex flex-1 justify-center items-center px-4">
                <div className="bg-[#212121] p-6 rounded-xl w-full max-w-lg shadow-lg">
                   
                   {/* page1 */}
                    {step === 1 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">How you'll appear</h2>
                            <p className="text-sm text-gray-400 mb-6">Choose your profile picture , Channel name</p>
                            <div className="flex flex-col items-center mb-6">
                                <label htmlFor="avatar" className="cursor-pointer flex flex-col items-center">
                                  {avatar? (<img src={URL.createObjectURL(avatar)} className="w-20 h-20 rounded-2xl object-cover
                                   border-2 border-gray-600"/>) 
                                  :
                                  ( <div className="w-20 h-20 bg-gray-700 rounded-full
                                    flex items-center justify-center text-gray-400 "><FaUserCircle size={40}/></div>)
                                    }
                                    <span className="text-red-400 text-sm mt-2">Upload Avatar</span>
                                    <input type="file" className="hidden" id="avatar" accept="image/*" 
                                onChange={handleAvatar}/> 
                                </label>
                               
                            </div>
                            
                                <input type="text" placeholder="Channel Name" className="w-full p-3 mb-4
                                 rounded-lg bg-[#121212] border border-gray-700 text-white focus:outline-none 
                                 focus:ring-2 focus:ring-red-500 " onChange={(e)=>setChannelName(e.target.value)} value={channelName}/>

                                 <button onClick={nextstep} disabled={!channelName} className="w-full flex items-center 
                                 justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-medium 
                                 disabled:bg-gray-600">Continue</button>
                                 <span className="w-full flex items-center justify-center text-sm text-blue-400 
                                 cursor-pointer hover:underline mt-2 " onClick={()=>navigate("/")}>Back to home</span>
                               
                        </div>
                    )}


                     {/* page2 */}
                    {step === 2 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Your Channel</h2>
                            
                            <div className="flex flex-col items-center mb-6">
                                <label className="cursor-pointer flex flex-col items-center">
                                  {avatar? (<img src={URL.createObjectURL(avatar)} className="w-20 h-20 rounded-2xl object-cover
                                   border-2 border-gray-600"/>) 
                                  :
                                  ( <div className="w-20 h-20 bg-gray-700 rounded-full
                                    flex items-center justify-center text-gray-400 "><FaUserCircle size={40}/></div>)
                                    }
                                   
                
                                </label>

                                    <h2 className="mt-3 text-lg font-semibold">{channelName}</h2>

                               
                                

                                
                            </div>
                             <button onClick={nextstep} disabled={!channelName} className="w-full flex items-center 
                                 justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-medium 
                                 disabled:bg-gray-600">Continue and Create Channel</button>
                                 <span className="w-full flex items-center justify-center text-sm text-blue-400 
                                 cursor-pointer hover:underline mt-2 " onClick={priviouststep}>Back</span>
                               
                        </div>
                    )}



                      {/* page3 */}
                    {step === 3 && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Create Channel</h2>
                           
                            <div className="flex flex-col items-center mb-6">
                                <label htmlFor="banner" className="cursor-pointer block mb-6 w-full">
                                  {banner? (<img src={URL.createObjectURL(banner)} className="w-full h-32  object-cover
                                   rounded-lg mb-2 border border-gray-700"/>) 
                                  :
                                  ( <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center
                                    justify-center text-gray-400 border border-gray-700 mb-2">
                                        Click to upload bannerImage
                                    </div>)
                                    }
                                    <span className="text-red-400 text-sm mt-2">Upload Banner Image</span>
                                    <input type="file" className="hidden" id="banner" accept="image/*" 
                                onChange={handleBanner}/> 
                                </label>
                               
                            </div>
                                <textarea className="w-full p-3 mb-4 rounded-lg bg-[#121212] border border-gray-700
                                 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                                  placeholder="Channel Description" onChange={(e)=>setDiscription(e.target.value)} value={discription}/>
                               
                                <input type="text" placeholder="Channel Category" className="w-full p-3 mb-6
                                 rounded-lg bg-[#121212] border border-gray-700 text-white focus:outline-none 
                                 focus:ring-2 focus:ring-red-500 " onChange={(e)=>setCategory(e.target.value)} value={category}/>

                                 <button onClick={handleCreateChannel} disabled={!discription || !category || loading} className="w-full flex items-center 
                                 justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-medium 
                                 disabled:bg-gray-600" >{loading? <ClipLoader color="black" size={20}/> : "Save & Create Channel"}</button>
                                 <span className="w-full flex items-center justify-center text-sm text-blue-400 
                                 cursor-pointer hover:underline mt-2 " onClick={priviouststep}>Back</span>
                               
                        </div>
                    )}

                </div>
            </main>
        </div>
    )
}
 export default CreateChannel
