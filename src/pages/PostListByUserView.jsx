
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getAllPosts, getAllUsers } from '../redux/blogSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, CardHeader, Col, Container, Form, Row } from 'react-bootstrap';
import BlogPostCard from '../components/BlogPostCard';
import { fetchAllPosts, searchPost } from '../redux/blogServices';
import BlogListHeader from '../components/BlogListHeader';
import BlogListSearch from '../components/BlogListSearch';

function PostListByUserView() {

    const { userId } = useParams();
    const posts = useSelector(getAllPosts);
    const users = useSelector(getAllUsers);

    const postLists = posts.filter((post) => post.userId === parseInt(userId));

    const flag = postLists.some((post) => post.userId === parseInt(userId));

    const name = users.find((usr) => usr.id === parseInt(userId)).name;

    return (
        <Container className='bg-light shadow  vh-100 overflow-y-auto'>
            {
                flag && <BlogListHeader name={name} />
            }
            <BlogListSearch userId={userId} />
            {
                flag ?
                    postLists.reverse().map((post, idx) => <BlogPostCard key={idx} post={post} />)
                    : <center><h4>No posts..</h4></center>
            }
        </Container>
    );
}

export default PostListByUserView