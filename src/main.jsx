import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import OtpVerification from "./Components/OtpVerification/OtpVerification";



const router = createBrowserRouter([
  {
   
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/singup",
        element:<SignUp></SignUp>
      },
      {
        path: "/OtpVerification",
        element:<OtpVerification></OtpVerification>
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
