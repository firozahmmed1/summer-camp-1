import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../public/useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure(); 

   const{data: isAdmin, isLoading:isAdminLoading}=useQuery({
        queryKey: ['isAdmin', user?.admin],
        enabled:!loading,
        queryFn: async () => {
          const res = await axiosSecure.get(``)
          
          return res.data.admin
        },
      })
    return [isAdmin, isAdminLoading]
       
       
};

export default useAdmin;