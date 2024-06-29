import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Root from "./ROOT/Root";
import ResultCreate from "./pages/shared/ResultCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[


      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/resultCreate',
        element:<ResultCreate></ResultCreate>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
