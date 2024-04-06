import React, {Component} from "react";
import HomePage from "./containers/HomePage";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage></HomePage>,
      children: [
        {
          index: true,
          element: <div> Empty index </div>
        },
      ]
    },
  ])
  
  ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
  )