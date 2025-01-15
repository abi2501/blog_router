

import React, { useEffect } from 'react'
import PostListByUserView from './PostListByUserView';
import { useDispatch } from 'react-redux';
import { fetchAllPosts, fetchAllUsers } from '../redux/blogServices';

function PostPage() {

    const dispatcher = useDispatch();
    debugger
    useEffect(() => {
        console.log("Comes here");

        fetchAllUsers(dispatcher);
        fetchAllPosts(dispatcher);
    }, []);

    return (
        <><div>test</div>
            <PostListByUserView />
        </>
    )
}

export default PostPage