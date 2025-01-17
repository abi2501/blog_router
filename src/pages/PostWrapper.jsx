import { useEffect } from "react";
import PostListByUserView from "./PostListByUserView";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormLabel, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getAllPosts, getAllUsers } from "../redux/blogSlice";
import BlogListHeader from "../components/BlogListHeader";
import BlogListSearch from "../components/BlogListSearch";


const PageWrapper = () => {

    const { userId } = useParams();

    const posts = useSelector(getAllPosts);
    const users = useSelector(getAllUsers);
    const postLists = posts.filter((post) => post.userId === parseInt(userId));
    const flag = postLists.some((post) => post.userId === parseInt(userId));
    const user = users.find((usr) => usr.id === parseInt(userId))?.name;

    return (
        <Container className='bg-light shadow vh-100  overflow-hidden'>
            {
                flag && <BlogListHeader name={user} />
            }

            {
                flag && <BlogListSearch userId={userId} />
            }
            <Row>
                <Col>
                    <Container className='overflow-y-scroll overflow-x-hidden' style={{ height: "80vh" }}>
                        {
                            flag &&
                            <ListGroup>
                                {
                                    postLists.reverse().map((post, idx) =>
                                        <ListGroupItem key={idx} className="justify-content-center text-center border-0 m-2 p-3 rounded shadow-sm">
                                            <Link to={`post/${post.id}`} className="link-secondary text-decoration-none"><span>{post.title}</span></Link>
                                        </ListGroupItem>)
                                }
                            </ListGroup>
                        }
                    </Container>
                </Col>
            </Row>
        </Container >
    );
};

export default PageWrapper