import { useEffect, useState } from "react";
import Container from "../../../Components/Container/Container";
import { Flip } from "react-awesome-reveal";
import axios from "axios";

const PopularClassSection = () => {
    const [users, setUaser] = useState([])
    useEffect(() => {
        axios.get('https://ass-sever.vercel.app/classes/popularclasses')
            .then(res => setUaser(res.data)
            )
    }, [])
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
                    {
                        users?.map((user,index) => (

                            <div key={index} className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={user?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="text-xl font-semibold">{user?.class_name}</p>
                            
                        </div>
                    </div>
                        ))
                    }
                    
                </div>
            </Container>
        </div>
    );
};

export default PopularClassSection;