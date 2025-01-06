import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getUserLoading } from '../redux/blogSlice'
import { fetchAllPosts, fetchAllUsers } from '../redux/blogServices';
import { Container, Row, Spinner } from 'react-bootstrap';
import UserProfileCard from '../components/UserProfileCard';


function UserCardView() {

    const userList = useSelector(getAllUsers);
    const userLoader = useSelector(getUserLoading);

    const dispatcher = useDispatch();

    useEffect(() => {
        fetchAllUsers(dispatcher);
        fetchAllPosts(dispatcher);
    }, []);

    const userCardList = userList.map((user, idx) => {
        return <UserProfileCard key={user.id} user={user} />
    });

    return (
        <>
            <center>
                <Container className="d-flex justify-content-center vh-100 overflow-y-auto">
                    {
                        userLoader
                            ?
                            <Row>{userCardList}</Row>
                            : <Spinner animation="border" role="status"></Spinner>
                    }
                </Container>
            </center>
        </>

    );
}

export default UserCardView