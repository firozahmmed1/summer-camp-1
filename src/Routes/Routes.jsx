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
import StudentRoute from "./StudentRoute";
import AdminRoute from "./AdminRoute";
import InstuctorRoute from "./InstuctorRoute";

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
                        element:<StudentRoute><AddRole></AddRole></StudentRoute>
                    },
                    {
                        path:'/dashboard/myseletedclass',
                        element:<StudentRoute><SelectedClass></SelectedClass></StudentRoute>
                    },
                    {
                        path:'/dashboard/myenrolledclasses',
                        element:<StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
                    },
                    {
                        path:'/dashboard/payment/:id',
                        element:<StudentRoute><Payment></Payment></StudentRoute>
                    },
                    {
                        path:'/dashboard/paymenthistory',
                        element:<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
                    },

                    // ------------------instracture--------
                    {
                        path:'/dashboard/addaclass',
                        element:<InstuctorRoute><AddaClass></AddaClass></InstuctorRoute>
                    },
                    {
                        path:'/dashboard/myclasses',
                        element:<InstuctorRoute><MyClasses></MyClasses></InstuctorRoute>
                    },

                    // -------Admin-------
                    {
                        path:'/dashboard/manageclasses',
                        element:<AdminRoute><ManagesClasses></ManagesClasses></AdminRoute>
                    },
                    {
                        path:'/dashboard/manageuser',
                        element:<AdminRoute><ManageUser></ManageUser></AdminRoute>
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