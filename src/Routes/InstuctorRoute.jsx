/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../public/useAuth/useAuth";
import Loader from "../Shared/Loader/Loader";
import useInstructor from "../Hooks/useInstructor/useInstructor";

const InstuctorRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    const [isInstructor]=useInstructor()
    
    if(loading){
        return <Loader></Loader>
    }

    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace ></Navigate>
    
};

export default InstuctorRoute;