import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

import PostListByUserView from './pages/PostListByUserView';
import HomePage from './pages/HomePage';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='posts'>
          <Route path=':userId' element={<PostListByUserView />} />
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
