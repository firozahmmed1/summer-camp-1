import { Zoom } from "react-awesome-reveal";
import Container from "../../Components/Container/Container"

const InstructorsPage = () => {
    return (
        <Container>
            <Zoom>
                <h1 className=" mt-12 mb-24 text-5xl text-center font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Our Instructors</h1>
            </Zoom>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-44">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default InstructorsPage;