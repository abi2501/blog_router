import { useSelector } from "react-redux";
import { getAllPosts } from "./blogSlice";


const POST_URI = "https://jsonplaceholder.typicode.com/posts"
const USERS_URI = "https://jsonplaceholder.typicode.com/users"


export const fetchAllUsers = async (dispatcher) => {
    const response = await fetch(USERS_URI);
    const userData = await response.json();
    if (userData) {
        dispatcher({
            type: "blogReducer/getUserData",
            payload: {
                userList: userData
            }
        });
    }
}

export const fetchAllPosts = async (dispatcher) => {
    const response = await fetch(POST_URI);
    const postData = await response.json();

    dispatcher({
        type: "blogReducer/getPostData",
        payload: {
            posts: postData
        }
    })
}

export const searchPost = (dispatcher, text) => {

    dispatcher({
        type: "blogReducer/searchPost",
        payload: { title: text }
    });
}

export const fetchPostById = (postList, postId) => {
    // const postList = getAllPosts;
    // console.log(postList, postId);
    return postList.find((post) => post.id === parseInt(postId))
}

export const deletePost = async (dispatcher, id) => {
    const response = await fetch(`${POST_URI}/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        dispatcher({
            type: "blogReducer/deletePost",
            payload: { "id": id }
        });
    }
}


export const addNewPost = async (dispatcher, post) => {

    const response = await fetch(POST_URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    if (response.ok) {
        dispatcher({
            type: "blogReducer/addPost",
            payload: { post: post }
        });
    }
}

export const editPost = async (dispatcher, post) => {

    const response = await fetch(POST_URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    if (response.ok) {
        dispatcher({
            type: "blogReducer/updatePost",
            payload: { post: post }
        })
    }
}