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
import ResultSheet from "./pages/ResultSheet";
import CustomResult from "./custom-result/CustomResult";
import CustomMarksheet from "./custom-result/CustomMarksheet";

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
        path:'/custom-result',
        element:<CustomResult></CustomResult>
      },
      {
        path:'/custom-marksheet',
        element:<CustomMarksheet></CustomMarksheet>
      }
      // {
      //   path:'/resultCreate',
      //   element:<ResultCreate></ResultCreate>
      // },
      // {
      //   path:'/resultSHeet',
      //   element:<ResultSheet></ResultSheet>
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
