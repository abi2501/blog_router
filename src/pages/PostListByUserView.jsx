
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getAllPosts, getAllUsers } from '../redux/blogSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Form, Row } from 'react-bootstrap';
import BlogPostCard from '../components/BlogPostCard';

import BlogListHeader from '../components/BlogListHeader';
import BlogListSearch from '../components/BlogListSearch';

function PostListByUserView() {

    const { userId } = useParams();

    const posts = useSelector(getAllPosts);
    const users = useSelector(getAllUsers);
    const postLists = posts.filter((post) => post.userId === parseInt(userId));
    const flag = postLists.some((post) => post.userId === parseInt(userId));
    const name = users.find((usr) => usr.id === parseInt(userId))?.name;

    return (
        <Container className='bg-light shadow overflow-hidden'>
            {
                flag && <BlogListHeader name={name} />

            }
            <BlogListSearch userId={userId} />
            <div className='vh-100 overflow-y-auto'>
                {
                    flag ?
                        postLists.reverse().map((post, idx) => <BlogPostCard key={idx} post={post} />)
                        : <center><h4>No posts..</h4></center>
                }
            </div>
        </Container>
    );
}

export default PostListByUserView