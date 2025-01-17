

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts, getAllUsers } from '../redux/blogSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { fetchPostById } from '../redux/blogServices';
import BlogListHeader from '../components/BlogListHeader';
import BlogPostCard from '../components/BlogPostCard';

function BlogPost() {
    const { postId, userId } = useParams();

    const userList = useSelector(getAllUsers);

    const user = userList.find((usr) => usr.id === parseInt(userId))?.name;
    const post = useSelector((state) => fetchPostById(state.bstore.posts, postId))

    return (
        user && post &&
        <Container>
            <Row>
                <Col>
                    <BlogListHeader name={user} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <BlogPostCard post={post} />
                </Col>
            </Row>
        </Container>
    )
}

export default BlogPost