import Container from "../../../Components/Container/Container";
import { Flip } from "react-awesome-reveal";

const PopularClassSection = () => {
    return (
        <div className="mt-12 mb-20">
            <Container>
            <div>
                <Flip>
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Popular Classes Section</h1>
                </Flip>
                <div className="divider"></div> 
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-5">
                <div className="card w-full bg-gradient-to-r from-green-600 via-orange-500 to-red-600 shadow-xl border">
                    <img src="https://i.ibb.co/YZv93S9/339266532-527372782919415-6578240290515521451-n.jpg" alt="" />
                    <div className="card-body">
                        <h2 className="card-title text-white">Shoes!</h2>
                    </div>
                </div>
                
            </div>
        </Container>
        </div>
    );
};

export default PopularClassSection;