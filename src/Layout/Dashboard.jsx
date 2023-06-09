import { Link, Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";
import useAuth from "../../public/useAuth/useAuth";

const Dashboard = () => {
    const {user} =useAuth()

    const isStudent = false;
    return (
        <Container>
            <div className="drawer lg:drawer-open mt-12 mb-12">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>  
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-800 h-full text-base-content rounded">
                        
                        <div className="avatar mt-10 flex items-center justify-center">
                            <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                         <div className="mt-2">
                            <h1 className="text-white text-xl italic font-bold text-center">{user?.displayName}</h1>
                            <p className="text-white font-semibold text-center ">Student</p>
                         </div >
                        <div className="divider before:bg-primary after:bg-secondary"></div> 

                        <div className="">
                            {/* Student--- */}
                           {isStudent && <> 
                           <li className="text-orange-400 items-center font-semibold"><Link to="/dashboard/addrole">Dashboard-Student</Link></li>
                           <li className="text-orange-400 items-center font-semibold"><Link to="/dashboard/myseletedclass">My Selected Classes</Link></li>
                           <li className="text-orange-400 items-center font-semibold"><Link to="/dashboard/myenrolledclasses">My Enrolled Classes</Link></li>
                           <li className="text-orange-400 items-center font-semibold"><Link to="/dashboard/paymenthistory">Payment History</Link></li>
                           </>}
                            {/* Instructor--- */}
                            <>
                            <li className="text-orange-400 items-center font-semibold"><Link to="/dashboard/intracture">Dashboard-Intracture</Link></li>
                            <li className="text-orange-400 items-center font-semibold"><Link to="/dashboard/addaclass">Add a Class</Link></li>
                            </>
                            
                        </div>
                        
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default Dashboard;