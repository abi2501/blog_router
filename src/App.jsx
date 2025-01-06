import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'
import { useSelector } from 'react-redux';
import { getAllUsers } from './redux/blogSlice';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/home';
import PostListByUserView from './pages/PostListByUserView';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='posts'>
          <Route path=':userId' element={<PostListByUserView />} />
        </Route>
        {/* <Route path='*' element={<Container><h5>404 Found</h5></Container>} /> */}
      </Route>
    ));


  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
