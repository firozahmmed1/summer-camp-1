import { useQuery } from "@tanstack/react-query";
import useAuth from "../../public/useAuth/useAuth";
import useAxiosSecure from "./useAxiosSecure/useAxiosSecure";

const useCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cartValue = [] } = useQuery({
        queryKey: ['cartValue', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking?email=${user?.email}`)
            return res.data;
        },
    })

    return [cartValue, refetch]

};

export default useCart;