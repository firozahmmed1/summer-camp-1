import { Zoom } from "react-awesome-reveal";
import Container from "../../Components/Container/Container"

const InstructorsPage = () => {
    return (
        <Container>
            <Zoom>
                <h1 className="text-5xl text-center font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Our Instructors</h1>
            </Zoom>
        </Container>
    );
};

export default InstructorsPage;