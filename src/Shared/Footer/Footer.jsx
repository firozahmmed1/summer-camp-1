import Container from "../../Components/Container/Container";
import logo from "../../assets/logo/ass-12-logo.png"
import moment from 'moment';
const Footer = () => {
    return (
        <div className="bg-[#452c63]">
            <Container>
                <footer className="footer p-10 text-neutral-content">

                    <div>
                        <img width={50} src={logo} alt="" />
                        <p className="text-2xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Art & craft School</p>
                    </div> 
                    <div>
                        <span className="footer-title">Contact Info</span>
                        <a className="link link-hover">Phone: +8801746719090</a>
                        <a className="link link-hover">Email: firozahmmed05@gmail.com</a>
                       
                    </div>
                    <div>
                        <span className="footer-title">Address</span>
                        <p className=" ">House #64, Road-10, Sector-10, Uttara-1230, <br /> Dhaka, Bangladesh </p>
                        
                    </div>
                </footer>
                <div className="footer footer-center p-4 text-base-content">
                    <div>
                        <p className="text-white">Copyright © {moment().format('YYYY')} - All right reserved by Art & craft School</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;