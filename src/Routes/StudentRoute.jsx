/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../public/useAuth/useAuth";
import Loader from "../Shared/Loader/Loader";
import useStudent from "../Hooks/useStudent/useStudent";



const StudentRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    const [isStudent] =useStudent();
    if(loading){
        return <Loader></Loader>
    }

    if(user && isStudent){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace ></Navigate>

};

export default StudentRoute;