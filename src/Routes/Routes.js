import Apoinment from "../Pages/Appoinment/Apoinment";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import DashboardLayout from "../Shared/DashboardLayout";
import Myappoinment from "../Shared/Myappoinment";
import PrivateRoute from "../Shared/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");
const { default: Errorpage } = require("../Shared/Errorpage");
const { default: Main } = require("../Shared/Main");


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/appoinment',
                element: <Apoinment/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]

    },
        {
            path:'/dashboard',
            element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children:[
                {
                    path:'/dashboard',
                    element:<Myappoinment/>
                }
            ]
        }
])