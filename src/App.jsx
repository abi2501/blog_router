import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

import PostListByUserView from './pages/PostListByUserView';
import HomePage from './pages/HomePage';
import { useDispatch } from 'react-redux';
import { fetchAllPosts, fetchAllUsers } from './redux/blogServices';
import { useEffect } from 'react';
import PostWrapper from './pages/PostWrapper';


function App() {
  const dispatcher = useDispatch();

  useEffect(() => {
    console.log("Comes here");
    fetchAllUsers(dispatcher);
    fetchAllPosts(dispatcher);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='posts'>
          <Route path=':userId' element={<PostWrapper />} />
        </Route>
        <Route path='*' element={<Container><h5>404 Found</h5></Container>} />
      </Route>
    ));

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
