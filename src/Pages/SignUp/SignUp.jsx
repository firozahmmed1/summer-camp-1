import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import loginformImg from "../../assets/Login/login_signup.png"
import Container from "../../Components/Container/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useAuth from "../../../public/useAuth/useAuth";
import Swal from 'sweetalert2'

const schema=yup.object({
  name: yup.string().required("Name is a required "),
  email: yup.string().required("Email is a required ").email(),
  password: yup.string().min(6,"Password must be at least 6 characters"), 
  confirmPassword:yup.string().oneOf([yup.ref("password")], "Password does't match") 
})

const SignUp = () => {
    const{signInUser,createProfile, socialLogin} =useAuth();
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {handleSubmit, register, formState:{ errors }, reset} = useForm({
      resolver:yupResolver(schema)
    })
    const onSubmit =data=>{
        signInUser(data.email, data.password)
        .then((result)=>{
            console.log(result.user)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Registration Done',
                showConfirmButton: false,
                timer: 1500
              })
            createProfile(data.name, data.photo)
            .then(()=>{  
                reset();
                navigate(from, { replace: true });
            })
            .catch(()=>{})
        })
        .catch(error =>{
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              })
        })
            }
      const handleGoogleLogin=()=>{
            socialLogin()
            .then(()=>{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Successfully Login',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, { replace: true });
            })
            .catch(()=> {})
      }      
    return (
        <Container>
            <div className="hero  mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="hero-content lg:w-2/3 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                       <img src={loginformImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name {...register("name")} type="text"  placeholder="Name" className="input input-bordered" /> 
                                <span className="text-red-800">{errors.name?.message}</span>
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name {...register("email")} type="email" placeholder="Email"  className="input input-bordered" /> 
                                <span className="text-red-800">{errors.email?.message}</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name id="password" {...register("password")} type="Password" placeholder="Password" className="input input-bordered" /> 
                                <span className="text-red-800">{errors.password?.message}</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name {...register("confirmPassword")} type="Password" placeholder="Confirm Password" className="input input-bordered" /> 
                                <span className="text-red-800">{errors.confirmPassword?.message}</span>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input required {...register("photo")}  type="url" placeholder="password" className="input input-bordered relative w-full"  />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent hover:bg-slate-900 text-white normal-case">Sign Up</button>
                            </div>
                            <div className="form-control mt-1">
                                <button onClick={handleGoogleLogin} className="btn btn-outline btn-accent normal-case"><span className='mr-1'><FaGoogle className="text-[#FBBC05]"></FaGoogle></span> SignUp with Google</button>
                            </div>
                           
                            <p className='text-center'><small>Already have an account?<span className='underline text-blue-600'> <Link to="/login">Login</Link></span></small></p>
                
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default SignUp;