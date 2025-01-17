import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile2 from '../../public/profile_2.jpg'
import profile1 from '../../public/profile.jpeg'
import profile3 from '../../public/profile_3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Col, Card, Button, Image, Row, Badge, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../redux/blogSlice';


function UserProfileCard({ user }) {

    const naviagte = useNavigate();

    const handleReadPost = () => {
        naviagte(`/user/${user.id}`);
    }

    const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,svg}');

    let imageList = [];
    for (const img in images) {
        imageList.push(img);
    }

    const profile_img = imageList[Math.floor(Math.random() * imageList.length)]

    const postList = useSelector(getAllPosts);

    const postCount = postList.filter((post) => post.userId === user.id);

    return (
        <Col xs="4" className='py-2'>
            <Container fluid>
                <div className="d-flex flex-column justify-content-center ucard-bg" onClick={handleReadPost}>
                    <Image
                        // class="ucard-image"
                        variant="top"
                        src={profile_img}
                        style={{
                            height: '150px',
                            borderRadius: '2px',
                        }}
                    />
                    <div className='bg-dark-subtle'><h4>{user.name}</h4></div>
                    <div className='text-white d-flex flex-column py-1 justify-content-around'>
                        <div className='d-flex flex-row gap-1 justify-content-center p-1'>
                            <FontAwesomeIcon icon={faPhone} className="icon pt-1" />
                            <span>{user.phone}</span>
                        </div>
                        <div className='d-flex flex-row gap-1 justify-content-center p-1'>
                            <FontAwesomeIcon icon={faEnvelope} className="icon pt-1" />
                            <span>{user.email}</span>
                        </div>
                        <div className='d-flex flex-row gap-2 justify-content-center p-1'>
                            <FontAwesomeIcon icon={faGlobe} className="icon pt-1" />
                            <span className='text-decoration-underline'>{user.website}</span>
                        </div>
                    </div>
                    <div className='text-white py-1 d-flex flex-row justify-content-around' style={{ "backgroundColor": "#808080" }}>
                        <div>
                            <h6>Posts</h6>
                            <h6><Badge bg="info">{postCount.length}</Badge></h6>
                        </div>
                        <div>
                            <h6>Company</h6>
                            <Badge pill bg="light" text="dark" className='p-2'>
                                {user.company.name}
                            </Badge>
                        </div>
                    </div>
                    <Button variant='info' style={{ "backgroundColor": "#31B6BF" }} className='border-0 rounded-0 text-white p-2' onClick={handleReadPost}>
                        Read Posts
                    </Button>
                </div>
            </Container>
        </Col>
    )
}

export default UserProfileCard