import { Zoom } from "react-awesome-reveal";
import Container from "../../../Components/Container/Container";
const PopularInstractureSection = () => {
    return (
        <div className="mb-40">
            <Container>
                <div className="mt-20">
                    <Zoom>
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Popular Instracture Section</h1>
                    </Zoom>
                    <div className="divider"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    <div className="card w-full border">
                        <div className="card-body">
                            <div className="avatar flex justify-center items-center">
                                <div className="w-full rounded-full">
                                    <img src="https://i.ibb.co/YZv93S9/339266532-527372782919415-6578240290515521451-n.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title italic flex justify-center items-center">Card title!</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularInstractureSection;