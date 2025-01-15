

import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import UserCardView from './UserCardView'

function HomePage() {
    return (
        <Container className='bg-light'>           
            <Row>
                <Col>
                    <UserCardView />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage