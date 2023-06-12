import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../public/useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {
    const {user, loading}=useAuth();
    const [axiosSecure]=useAxiosSecure(); 
   const{data: isAdmin, isLoading:isAdminLoading}=useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async() => {
          const res = await axiosSecure.get(`/users/admin/${user?.email}`)
          return res.data.admin
        }
      })
    //   console.log(isAdmin)
    return [isAdmin, isAdminLoading]
       
// const {user, loading}=useAuth();
  
//     const token = localStorage.getItem('access-token');
//     const {refetch, data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ['users', user?.email],
//         queryFn: async () => {
            
//             if(!user){
//                 return []
// }
//             const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
//                 headers:{
//                     authorization: `Bearer ${token}`
//                 }
//             })
//             const data = await res.json()
//             console.log(data)
//             return data.admin
//         }
//     })
    // return [ isAdmin,refetch, isAdminLoading]
       
};

export default useAdmin;