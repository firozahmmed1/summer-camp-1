import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import logo from "../../assets/logo/ass-12-logo.png"
const Navbar = () => {
    const navOptions =<>
       <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Home</Link>
       <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Instructors</Link>
       <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Classes</Link>
       <Link to="/" className="px-2 font-semibold text-[16px] text-green-950">Dashboard</Link>
      
    </>
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

                   <div className="flex justify-center items-center">
                   <Link className=" normal-case text-xl">
                      <img width={50} src={logo} alt="" />
                      </Link>
                      <p  className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Art & craft School</p>
                   </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
             <Link className="md:mr-4 md:font-semibold text-green-950" to="/login">Login</Link>
                     <div className="flex items-center justify-center">
                        {/* <div className="avatar relative">
                            <div className="w-9 mr-2 rounded-full cursor-pointer">
                               {user.photoURL && <img onMouseEnter={()=>handlePicHover(false)} onMouseLeave={()=>handlePicHover(true)} src={user.photoURL} /> }
                            </div>
                            <p hidden={hover} className="absolute w-[200px] bottom-[-20px]">{user.displayName}</p>
                        </div>
                        <Link onClick={handleLogOut} className="md:mr-4 md:font-semibold">Logout</Link> */}
                    </div>
                

                </div>
            </div>
        </Container>
    );
};

export default Navbar;