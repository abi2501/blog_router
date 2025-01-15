
import React, { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import BlogModal from './BlogModal';
import { deletePost, editPost } from '../redux/blogServices';
import { useDispatch } from 'react-redux';
import BlogModalDelete from './BlogModalDelete';

function BlogPostCard({ post }) {

    const [show, setShow] = useState(false);
    const [delShow, setDelShow] = useState(false);

    const dispatcher = useDispatch();

    const handleClose = () => setShow(false);
    const handleDelClose = () => setDelShow(false);

    const handlePostDelete = () => {
        deletePost(dispatcher, post.id);
        setDelShow(false);
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
                    <Card>
                        <Card.Header>
                            <Row className="align-items-center">
                                <Col className="text-start">
                                    {post.title}
                                </Col>
                                <Col className="text-end">
                                    <Button variant='outline' style={{ cursor: 'pointer' }} onClick={handlePostEdit}>
                                        <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                                    </Button>
                                    <Button variant='outline' style={{ cursor: 'pointer' }} onClick={() => setDelShow(true)}>
                                        <FontAwesomeIcon icon={faTrashCan} className="icon" />
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>{post.body}</Card.Body>

                    </Card>
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