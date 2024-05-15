import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from './../pages/Authentication/Login';
import Register from './../pages/Authentication/Register';
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../routes/PrivateRoute";
import Profile from "../pages/Profile";
import PostDetails from "../pages/PostDetails";
import VolunteerPosts from "../pages/VolunteerPosts";
import AddPost from "../pages/AddPost";
import MyList from "../pages/MyList";

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
              path: '/need-volunteer',
              element: <VolunteerPosts></VolunteerPosts>   
            },
            {
              path: "/add-post",
              element: <PrivateRoute><AddPost></AddPost></PrivateRoute>,
            },
            {
              path: "/my-list",
              element: <PrivateRoute><MyList></MyList></PrivateRoute>,
            },


            {
                path: '/post/:id',
                element: (
                  <PrivateRoute>
                    <PostDetails />
                  </PrivateRoute>
                ),
                loader: ({ params }) =>
                  fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`),
              },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
              },


        ]
    }
])

export default router;