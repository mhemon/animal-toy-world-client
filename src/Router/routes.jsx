import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../components/main/main";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import AddAToy from "../components/AddAToy/AddAToy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/alltoys',
                element: <AllToys/>
            },
            {
                path: '/mytoys',
                element: <MyToys/>
            },
            {
                path: '/addtoys',
                element: <AddAToy/>
            },
            {
                path: '/blogs',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
]);