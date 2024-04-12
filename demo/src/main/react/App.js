import React, {Component} from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cards from "./containers/containers/components/nav/Hearthstone/Cards";
import Sets from "./containers/containers/components/nav/Hearthstone/Sets";
import Home from "./containers/containers/components/nav/Hearthstone/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppContainer></AppContainer>,
    children: [
      {
        index: true,
        element: <div> <Home /> </div>
      },
      {
        path: "CardSearch",
        element: <Cards />
      },
      {
        path: "CardSets",
        element: <Sets></Sets>
      }
    ]
  },
])

ReactDom.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <RouterProvider router = {router} />
  </React.StrictMode>
)
