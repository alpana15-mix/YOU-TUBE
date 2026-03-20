import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({

name:"video",

initialState:{

videos:[],
currentVideo:null,
suggestions:[]

},

reducers:{

setVideos:(state,action)=>{
state.videos = action.payload
},

setCurrentVideo:(state,action)=>{
state.currentVideo = action.payload
},

setSuggestions:(state,action)=>{
state.suggestions = action.payload
}

}

})

export const {
setVideos,
setCurrentVideo,
setSuggestions
} = videoSlice.actions

export default videoSlice.reducer