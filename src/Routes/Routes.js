import Apoinment from "../Pages/Appoinment/Apoinment";

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
                path:'/',
                element: <Home></Home>
            },
        ]

    }
])