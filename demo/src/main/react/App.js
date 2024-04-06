import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "./containers/AppContainer"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppContainer />,
        children: [
            {
              index: true,
              element: <div> Empty Index </div>
            },
        ]
    }

])


ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)