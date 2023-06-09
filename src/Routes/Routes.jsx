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
import SelectedClass from "../Pages/Dashboard/SelectedClass";
import AddRole from "../Pages/Dashboard/AddRole";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
import Intracture from "../Pages/Dashboard/Intracture";
import AddaClass from "../Pages/Dashboard/AddaClass";

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
                element:<PraviteRoute><Dashboard></Dashboard></PraviteRoute>,
                children:([
                    //--------- Student
                    {
                        path:'/dashboard/addrole',
                        element:<AddRole></AddRole>
                    },
                    {
                        path:'/dashboard/myseletedclass',
                        element:<SelectedClass></SelectedClass>
                    },
                    {
                        path:'/dashboard/myenrolledclasses',
                        element:<MyEnrolledClasses></MyEnrolledClasses>
                    },
                    {
                        path:'/dashboard/payment',
                        element:<Payment></Payment>
                    },
                    {
                        path:'/dashboard/paymenthistory',
                        element:<PaymentHistory></PaymentHistory>
                    },

                    // ------------------instracture--------
                    {
                        path:'/dashboard/intracture',
                        element:<Intracture></Intracture>
                    },
                    {
                        path:'/dashboard/addaclass',
                        element:<AddaClass></AddaClass>
                    }

                ])
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            
        ])
    },
    
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])