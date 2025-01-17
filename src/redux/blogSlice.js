import { createSlice } from "@reduxjs/toolkit"
import { fetchAllPosts } from "./blogServices";

const initialState = {
    users: {
        loading: false,
        userList: []
    },
    posts: []
}

const blogSlice = createSlice({
    name: "blogReducer",
    initialState,
    reducers: {
        getUserData: (state, action) => {
            if (action.payload.userList) {
                state.users.loading = true;
                state.users.userList = action.payload.userList;
            }
        },
        getPostData: (state, action) => {
            if (action.payload.posts) {
                state.posts = action.payload.posts;
            }
        },
        searchPost: (state, action) => {
            if (action.payload.title != "") {
                state.posts = [...state.posts].filter((post) => (post.title).includes(action.payload.title) == true)
            }
            else {
                fetchAllPosts();
            }
        },
        addPost: (state, action) => {

            if (action.payload.post) {
                let postData = [...state.posts];

                const sortedPosts = [...postData].sort((a, b) => {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                });

                const postItem = {
                    ...action.payload.post,
                    "id": sortedPosts[sortedPosts.length - 1].id + 1,

                }
                sortedPosts.push(postItem);

                state.posts = sortedPosts
            }
        },
        updatePost: (state, action) => {

            const postItem = action.payload.post;
            const post = [...state.posts].filter((post) => post.id !== postItem.id);
            const postData = [...post, postItem];

            const sortedPosts = [...postData].sort((a, b) => {
                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;
                return 0;
            });
            state.posts = sortedPosts
        },
        deletePost: (state, action) => {
            state.posts = [...state.posts].filter((post) => post.id != action.payload.id);
        },
    },
});

export const { getUserData, addPost } = blogSlice.actions
export default blogSlice.reducer;

export const getAllUsers = (state) => state.bstore.users.userList;
export const getUserLoading = (state) => state.bstore.users.loading;

export const getAllPosts = (state) => state.bstore.posts;
