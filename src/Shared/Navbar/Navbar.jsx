import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import logo from "../../assets/logo/ass-12-logo.png"
import useAuth from "../../../public/useAuth/useAuth";
import Swal from "sweetalert2";
const Navbar = () => {
    const { user,LogOut } = useAuth()
    const navOptions = <>
        <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Home</Link>
        <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Instructors</Link>
        <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Classes</Link>
        <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Dashboard</Link>

    </> 
    const handleLogOut =()=>{
        LogOut()
        .then(()=>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Successfully Logout',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(()=>{})
    }
    return (
        <Container>
            <div className="navbar bg-base-100 mt-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>

                    <div className=" hidden md:block md:flex justify-center items-center">
                        <Link className=" normal-case text-xl">
                            <img width={50} src={logo} alt="" />
                        </Link>
                        <p className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Art & craft School</p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user ? <Link className="md:mr-4 md:font-semibold text-green-950" to="/login">Login</Link>
                        : <div className="dropdown dropdown-end">
                            <label tabIndex={0} className=" cursor-pointer m-1">
                                <div className="avatar">
                                    <div className="w-10 rounded-full flex justify-center items-center">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="font-bold text-[16px]"><Link onClick={handleLogOut}>Logout</Link></li>

                            </ul>
                        </div>
                    }

                </div>
            </div>
        </Container>
    );
};

export default Navbar;