
import React, { useState } from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'

function BlogModal({ show, handleClose, post = "", handleSubmit }) {
    const mTitle = post == "" ? "Add Post" : "Edit Post";

    const [postTitle, setPostTitle] = useState(post.title ? post.title : "");
    const [postDescription, setPostDescription] = useState(post.body ? post.body : "");
    const [enable, setEnable] = useState(false);

    const handleTitleChange = (e) => {
        let titletxt = e.target.value;
        if (titletxt) {
            setPostTitle(e.target.value);
        }
        enableSubmit();
    }

    const handleDesChange = (e) => {
        let desc = e.target.value;

        if (desc) {
            setPostDescription(desc)
        }
        enableSubmit();
    }

    const enableSubmit = () => {
        if (postTitle && postDescription) {
            setEnable(true);
        }
        else {
            setEnable(false);
        }
    }


    const handlePostSubmit = (e) => {
        e.preventDefault();

        const post = {
            "title": postTitle,
            "body": postDescription
        }
        handleSubmit(post);
        setPostTitle('');
        setPostDescription('');

        setEnable(false);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title ><span style={{ width: "200px", wordBreak: "break-word" }}>{mTitle}</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='justify-content-center px-5 gap-3' onSubmit={(e) => handlePostSubmit(e)}>
                    <Row className="mb-3">
                        <Form.Group as={Row} controlId="" className='mb-2'>
                            <Form.Control type="title" onChange={(e) => handleTitleChange(e)} placeholder="Title" value={postTitle} />
                        </Form.Group>
                        <Form.Group as={Row} controlId="" className='mb-2'>
                            <Form.Control rows={5} as="textarea" placeholder="Description" onChange={(e) => handleDesChange(e)} value={postDescription} />
                        </Form.Group>
                        <Form.Group as={Row} className='mb-2' >
                            <Button variant="primary" disabled={!enable} type="submit" onClick={handlePostSubmit}>
                                {mTitle}
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default BlogModal