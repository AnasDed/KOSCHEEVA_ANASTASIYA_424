import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Root from "../Pages/Root";
import Single from "../Pages/SingleProd";


const router = createBrowserRouter([
{
    path:'/',
    element: <Root />,
    children : [
        {
            path:'/',
            element: <Main />,
            index: true
        },
        {
            path: 'single/:id',
            element: <Single />
        }
    ]
}
])

export default router