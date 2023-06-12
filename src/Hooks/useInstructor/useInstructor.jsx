import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../public/useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useInstructor = () => {
    const {user,loading} =useAuth();
    const [axiosSecure]=useAxiosSecure();
    const{data:isInstructor, isLoading:isInstractureLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled:!loading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
          return res.data.instructor
        },
      })
    return [isInstructor, isInstractureLoading]
};
export default useInstructor;