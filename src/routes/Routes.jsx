import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from './../pages/Authentication/Login';
import Register from './../pages/Authentication/Register';
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../routes/PrivateRoute";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                element: <Home></Home>    

            },
            {
                path: '/login',
                element: <Login></Login>    

            },

            {
                path: '/register',
                element: <Register></Register>    

            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
              },


        ]
    }
])

export default router;