import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Home/Home/404page/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PraviteRoute from "./PraviteRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/dashboard',
                element:<PraviteRoute><Dashboard></Dashboard></PraviteRoute>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
            }
        ])
    },
    

])