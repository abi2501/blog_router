
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import BlogModal from './BlogModal';
import { deletePost, editPost, fetchPostById } from '../redux/blogServices';
import { useDispatch, useSelector } from 'react-redux';
import BlogModalDelete from './BlogModalDelete';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPosts } from '../redux/blogSlice';

function BlogPostCard({ post }) {


    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [delShow, setDelShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleDelClose = () => setDelShow(false);

    const handlePostDelete = () => {
        console.log("before ", post);
        deletePost(dispatcher, post.id);
        setDelShow(false);
        navigate(-1)
    }

    const handlePostEdit = () => {
        setShow(true);
    }

    const handleEditPost = (postData) => {
        editPost(dispatcher, { ...postData, id: post.id, userId: post.userId });
    }

    return (
        <>
            <Row className='py-2'>
                <Col>
                    {
                        <Container fluid className='bg-light p-5 vh-100'>
                            <Card className='border-0 '>
                                <Card.Header className='border-0 bg-info-subtle'>
                                    <Row className="align-items-center">
                                        <Col className="text-center">
                                            {post?.title}
                                        </Col>

                                    </Row>
                                </Card.Header>
                                <Card.Body className='border-0 p-4 text-center'>{post?.body}</Card.Body>
                                <Card.Footer className='bg-dark-subtle border-0 p-2'>
                                    <Row>
                                        <Col>
                                            <div className='d-flex justify-content-center gap-2'>
                                                <Button variant='outline-success' style={{ cursor: 'pointer' }} onClick={handlePostEdit}>
                                                    <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                                                    <span className='px-1'>Edit</span>
                                                </Button>
                                                <Button variant='outline-secondary' style={{ cursor: 'pointer' }} onClick={() => setDelShow(true)}>
                                                    <FontAwesomeIcon icon={faTrashCan} className="icon" />
                                                    <span className='px-1'>Delete</span>
                                                </Button>
                                            </div>
                                        </Col>

                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Container>
                    }
                </Col>
            </Row>
            {
                show && <BlogModal show={show} handleClose={handleClose} post={post} handleSubmit={handleEditPost} />

            }
            {
                delShow &&
                <Modal show={delShow} onHide={handleDelClose}>
                    <Modal.Header closeButton>
                        <Modal.Title ><span style={{ width: "200px", wordBreak: "break-word" }}>Delete Post</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <p>Do you want to delete this Post</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-end gap-5">
                                    <div className='gap-10'>
                                        <Button variant='primary' style={{ cursor: 'pointer' }} onClick={handlePostDelete}>
                                            <FontAwesomeIcon icon={faCheck} className="icon mx-1" />
                                            <span>Ok</span>
                                        </Button>
                                        <span style={{ margin: '0 3px' }}></span> {/* Spacer */}
                                        <Button variant='secondary' className='px-2' style={{ cursor: 'pointer' }} onClick={handleDelClose}>
                                            <FontAwesomeIcon icon={faXmark} className="icon mx-1" />
                                            <span>Cancel</span>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            }
        </>
    )
}

export default BlogPostCard