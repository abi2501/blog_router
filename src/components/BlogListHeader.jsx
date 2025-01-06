

import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BlogListHeader({ name }) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <Row>
            <Col>
                <Container fluid className='bg-body-secondary p-2 rounded' >
                    <Row className="align-items-center">
                        <Col className="text-start">
                            <Button variant='outline' onClick={handleGoBack} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={faArrowLeft} className="icon" /></Button>
                        </Col>
                        <Col className="text-end">
                            <h4 className='fw-light fs-2'>{name}</h4>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default BlogListHeader