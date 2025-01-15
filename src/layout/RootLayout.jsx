import { Outlet } from "react-router-dom"

import { fetchAllPosts, fetchAllUsers } from '../redux/blogServices';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const RootLayout = () => {


    return (
        <Outlet />
    )
}

export default RootLayout