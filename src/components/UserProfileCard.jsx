import React from 'react'
import { Button, Card, Col, Row, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function UserProfileCard({ user }) {

    const naviagte = useNavigate();

    const handleReadPost = () => {
        console.log("naviagting..")
        naviagte(`/posts/${user.id}`);
    }

    return (
        <Col xs="6" className='py-2'>
            <Card className='shadow border-0' style={{ margin: '1rem auto', height: "250px" }}>
                <Card.Body>
                    <div className='d-flex flex-row '>
                        <center>
                            <Image
                                className='d-flex flex-column'
                                variant="top"
                                src="data:image/jpeg;base64,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"
                                style={{
                                    // width: '100px',
                                    // height: '100px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    margin: '1rem auto',
                                }}
                            />
                        </center>
                        <div className='d-flex flex-column justify-content-center align-content-center px-5'>
                            <h6 className='text-center fw-light fs-3 py-1'>{user.name}</h6>
                            <h6 className='text-center fw-light fs-8 py-1 card-subtitle'>{user.phone}</h6>
                            <span className='fw-lighter fst-italic text-success-emphasis'>{user.email}</span>
                            <a href="#" className='cursor-pointer'>{user.website}</a>
                            <br />
                            <Button variant='secondary' onClick={handleReadPost}>Read Posts</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default UserProfileCard