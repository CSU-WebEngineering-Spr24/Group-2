import React, {Component} from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage></HomePage>,
      children: [
        {
          index: true,
          element: <div> Hello </div>
        },
      ]
    },
  ])
  
  ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
  )