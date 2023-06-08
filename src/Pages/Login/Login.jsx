import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import loginformImg from "../../assets/Login/login_signup.png"
import { useState } from "react";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import Container from "../../Components/Container/Container";
import useAuth from "../../../public/useAuth/useAuth";



const Login = () => {
    const [showHidePass, setShowHidePass] = useState(true)
    const { logInUser,socialLogin} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        logInUser(data.email, data.password)
        .then(()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Registration Done',
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, { replace: true });

        })
        .catch((error)=>{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    const googleLogin =()=>{
        socialLogin()
        .then(()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully Login',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
        .catch(()=>{})

    }
    return (
        <Container>
            <div className="hero mt-10 mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="hero-content lg:w-2/3 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginformImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-800">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center justify-center">
                                    <input type={showHidePass ? 'password' : 'text'} {...register("password", { required: true })} placeholder="password" className="input input-bordered relative w-full" /><span className="absolute right-12 cursor-pointer">{showHidePass ? <BsEyeSlash onClick={() => setShowHidePass(!showHidePass)}></BsEyeSlash> : <BsEye onClick={() => setShowHidePass(!showHidePass)}></BsEye>}</span>
                                </div>
                                 {errors.password && <span className="text-red-800">This field is required</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn bg-gradient-to-r from-green-600 via-orange-500 to-red-600 normal-case text-white hover:btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-1">
                                <button  onClick={googleLogin}  className="btn btn-outline btn-accent normal-case"><span className='mr-1'><FaGoogle className="text-[#FBBC05]"></FaGoogle></span> Login with Google</button>
                            </div>

                            <p className='text-center'><small>No account yet? <span className='underline text-blue-600'><Link to="/signup">Sign up</Link></span></small></p>

                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default Login;