import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../../public/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://ass-sever.vercel.app'
});

const useAxiosSecure = () => {
    const {LogOut}=useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('access-token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        });
    
        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              // await LogOut()
              // navigate('/login');
            }
            return Promise.reject(error);
          }
        );
      }, [LogOut, navigate]);
    
      return [axiosSecure];
    };
    
    export default useAxiosSecure;