import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./componennts/Home";
import Quiz from "./componennts/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
      path:"/quiz",
      element:<Quiz/>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
