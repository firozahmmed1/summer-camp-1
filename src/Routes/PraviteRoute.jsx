/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../public/useAuth/useAuth";
import Loader from "../Shared/Loader/Loader";

const PraviteRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PraviteRoute;