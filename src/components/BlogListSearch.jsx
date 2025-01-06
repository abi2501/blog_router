

import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { addNewPost, fetchAllPosts, searchPost } from '../redux/blogServices';
import BlogModal from './BlogModal';

function BlogListSearch({ userId }) {

    const dispatcher = useDispatch();
    const [searchText, setSearchText] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleSearchOnChange = (e) => {
        let txt = e.target.value;
        if (txt.trim()) {
            setSearchText(txt);
        }
        else {
            setSearchText("");
            fetchAllPosts(dispatcher);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText.trim().length != 0) {
            searchPost(dispatcher, searchText);
            setSearchText(searchText);
        }
        else if (searchText.trim().length == 0) {
            fetchAllPosts(dispatcher);
            setSearchText("");
        }

    }

    const handleAddPost = (post) => {

        addNewPost(dispatcher, {
            ...post,
            "userId": parseInt(userId)
        });
    }

    return (
        <>
            <Row>
                <Col>
                    <Container >
                        <Form onSubmit={(e) => handleSearch(e)} className='d-flex justify-content-center p-3 gap-2 '>
                            <input type="text" value={searchText} onChange={(e) => handleSearchOnChange(e)} placeholder='Search by title' className='w-75 rounded' />
                            <Button variant='outline-secondary' type='submit'>
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                            </Button>
                            <Button variant='secondary' onClick={() => setShow(true)} >
                                <FontAwesomeIcon icon={faPlus} className="icon" />
                                <span className='px-2'>Add Post</span>
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
            {
                show && <BlogModal show={show} handleClose={handleClose} handleSubmit={handleAddPost} />
            }
        </>
    )
}

export default BlogListSearch