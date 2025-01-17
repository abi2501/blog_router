

import React from 'react'
import { Container, Modal, Row, Col } from 'react-bootstrap'


function BlogModalDelete({ delShow, handleClose }) {
    return (
        <Modal show={delShow} onHide={handleClose}>
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
                </Container>
            </Modal.Body>

        </Modal>
    )
}

export default BlogModalDelete