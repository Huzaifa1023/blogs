import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PostDetails from "../pages/PostDeyails";
import Register from "../pages/Register";
import Settings from "../pages/Settings";

export const appRoutes = [
    {
        id:1,
        Component:Home,
        path:"/"
    },
    {
        id:2,
        Component:PostDetails,
        path:'/post:/postId'
    },
    {
        id:3,
        Component:CreatePost,
        path:"/create_post"
    },
    {
        id:4,
        Component:Settings,
        path:"/settings"
    },
]

export const authRoutes = [
    {
        id:1,
        Component:Register,
        path:"/register"
    },
    {
        id:2,
        Component:Login,
        path:'/'
    },
]