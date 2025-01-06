
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserCardView from './UserCardView'


const Home = () => {
    return (
        <Container className='bg-light'>
            {/* <Row>
                <Col>
                    <div>Search User</div>
                </Col>
            </Row>
            <br /> */}
            <Row>
                <Col>
                    <UserCardView />
                </Col>
            </Row>
        </Container>
    )
}

export default Home