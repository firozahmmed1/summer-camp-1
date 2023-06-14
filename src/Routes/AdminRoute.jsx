/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../public/useAuth/useAuth";
import Loader from "../Shared/Loader/Loader";
import useAdmin from "../Hooks/useAdmin/useAdmin";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    const [isAdmin] =useAdmin();
    
    if(loading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace ></Navigate>

};

export default AdminRoute;