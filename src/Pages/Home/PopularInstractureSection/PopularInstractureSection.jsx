import { Zoom } from "react-awesome-reveal";
import Container from "../../../Components/Container/Container";
const PopularInstractureSection = () => {
    return (
        <div className="mb-40">
            <Container>
                <div className="mt-20 mb-20">
                    <Zoom>
                        <h1 className="text-5xl text-center font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Popular Classes Section</h1>
                    </Zoom>
                </div>
                <div className="grid grid-flow-col md:grid-cols-3 gap-5">
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default PopularInstractureSection;