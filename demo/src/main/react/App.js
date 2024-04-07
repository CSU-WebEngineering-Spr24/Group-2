import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Taken from my original spring demo NASA API, however, will not work or display a webpage. Results in a white label error unsure how to proceed will talk with the professor.
const router = createBrowserRouter([
  {
    path:"/",
    element: <AppContainer></AppContainer>,
    children: [
      {
        index: true,
        element: <div> Hearthstone</div>
      },
    ]
  },
])

ReactDom.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>
)
