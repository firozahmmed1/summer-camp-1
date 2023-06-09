import { Link, Outlet } from "react-router-dom";
import Container from "../Components/Container/Container";

const Dashboard = () => {
    return (
        <Container>
            <div className="drawer lg:drawer-open mt-12 mb-12">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <h1>Hello</h1>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-800 h-full text-base-content rounded">
                        
                        <div className="avatar mt-10 flex items-center justify-center">
                            <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                         <div className="mt-2">
                            <h1 className="text-white text-xl italic font-bold text-center">Name</h1>
                            <p className="text-white font-semibold text-center ">Student</p>
                         </div >
                        <div className="divider before:bg-primary after:bg-secondary"></div> 

                        <div className="">
                        <li className="text-white items-center font-semibold"><Link to="/">Dashboard-Student</Link></li>
                        </div>
                        
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default Dashboard;