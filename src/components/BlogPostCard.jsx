
import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import BlogModal from './BlogModal';
import { deletePost, editPost } from '../redux/blogServices';
import { useDispatch } from 'react-redux';

function BlogPostCard({ post }) {

    const [show, setShow] = useState(false);
    const dispatcher = useDispatch();

    const handleClose = () => setShow(false);

    const handlePostDelete = () => {
        deletePost(dispatcher, post.id);
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
                                    <Button variant='outline' style={{ cursor: 'pointer' }} onClick={handlePostDelete}>
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
        </>
    )
}

export default BlogPostCard