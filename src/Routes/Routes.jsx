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
import AddaClass from "../Pages/Dashboard/AddaClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import ManagesClasses from "../Pages/Dashboard/ManagesClasses";
import ManageUser from "../Pages/Dashboard/ManageUser";
import InstructorsPage from "../Pages/Instructors Page/InstructorsPage";
import Classes from "../Pages/Classes/Classes";

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
                path:'/instructorspage',
                element:<InstructorsPage></InstructorsPage>
            },
            {
                path:'/classes',
                element:<Classes></Classes>
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
                        path:'/dashboard/addaclass',
                        element:<AddaClass></AddaClass>
                    },
                    {
                        path:'/dashboard/myclasses',
                        element:<MyClasses></MyClasses>
                    },

                    // -------Admin-------
                    {
                        path:'/dashboard/manageclasses',
                        element:<ManagesClasses></ManagesClasses>
                    },
                    {
                        path:'/dashboard/manageuser',
                        element:<ManageUser></ManageUser>
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