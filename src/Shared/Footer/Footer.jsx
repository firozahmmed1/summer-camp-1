import Container from "../../Components/Container/Container";
import logo from "../../assets/logo/ass-12-logo.png"
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
                       
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </footer>
                <div className="footer footer-center p-4 text-base-content">
                    <div>
                        <p className="text-white">Copyright © 2023 - All right reserved by Art & craft School</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;