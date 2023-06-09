import { Link } from "react-router-dom";
import Container from "../../../../Components/Container/Container";
import ErrorImg from "../../../../assets/ErrorImg/ErrorImg.jpeg"
const ErrorPage = () => {
    return (
        <Container>
            <img className="w-8/12 mx-auto" src={ErrorImg} alt="" />
            <div className="flex items-center justify-center mb-12">
            <Link to='/' className="btn btn-warning normal-case btn-sm">Back to Home</Link>
            </div>
        </Container>
    );
};

export default ErrorPage;