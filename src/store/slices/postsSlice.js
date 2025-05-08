import {createSlice} from '@reduxjs/toolkit';

const initialState={
    list:[],
    selectedPost:null,
    comments:[],
    loading:false,
}

const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{

        //list
        fetchPosts:(state,action)=>{
            
            state.loading=true;
        },
        setPosts:(state,action)=>{
            state.list=action.payload;
            state.loading=false;
        },

        //details
        fetchPostDetails:(state,action)=>{
            state.loading=true;
        },
        setPostDetails:(state,action)=>{
            state.selectedPost=action.payload;
            state.loading=false;

        },

        //comments

        fetchComments:(state,action)=>{
            state.loading=true;
        },


        setComments:(state,action)=>{
            state.comments=action.payload;
            state.loading=false;

        },

        addComment:(state,action)=>{
            state.comments=[...state.comments,action.payload];
            state.loading=false;
        },
    }   
})

export const {
    fetchPosts,setPosts,fetchPostDetails,setPostDetails,fetchComments,setComments,addComment
}=postSlice.actions;

export default postSlice.reducer;