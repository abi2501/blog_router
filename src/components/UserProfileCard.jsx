import React from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../../public/profile_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Col, Card, Button, Image, Row, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../redux/blogSlice';

function UserProfileCard({ user }) {

    const naviagte = useNavigate();

    const handleReadPost = () => {
        naviagte(`/user/${user.id}`);
    }

    const postList = useSelector(getAllPosts);

    const postCount = postList.filter((post) => post.userId === user.id);

    return (
        <Col xs="4" className='py-2'>
            <div class="d-flex flex-column justify-content-center ucard-bg" onClick={handleReadPost}>
                <Image
                    class="ucard-image"
                    variant="top"
                    src={profile}
                    style={{
                        height: '200px',
                        borderRadius: '2px',
                    }}
                />
                <div className='bg-dark-subtle'><h4>{user.name}</h4></div>
                <div className='text-white d-flex flex-column py-2 justify-content-around'>
                    <div className='d-flex flex-row gap-2 justify-content-center p-2'>
                        <FontAwesomeIcon icon={faPhone} className="icon pt-1" />
                        <span>{user.phone}</span>
                    </div>

                    <div className='d-flex flex-row gap-2 justify-content-center p-2'>
                        <FontAwesomeIcon icon={faEnvelope} className="icon pt-1" />
                        <span>{user.email}</span>
                    </div>

                    <div className='d-flex flex-row gap-2 justify-content-center p-2'>
                        <FontAwesomeIcon icon={faGlobe} className="icon pt-1" />
                        <span className='text-decoration-underline'>{user.website}</span>
                    </div>
                </div>

                <div className='text-white py-2 d-flex flex-row justify-content-around' style={{ "background-color": "#808080" }}>
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
                <button style={{ "background-color": "#31B6BF" }} className='border-0 text-white p-3' onClick={handleReadPost}>
                    Read Posts
                </button>
            </div>
        </Col>
    )
}

export default UserProfileCard