import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../assets/LayOut/Main";
import Home from "../Page/Home/Home/Home";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home> ,
        },
      ],
    },
  ]);