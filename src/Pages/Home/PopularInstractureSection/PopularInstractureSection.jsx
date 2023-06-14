import { Zoom } from "react-awesome-reveal";
import Container from "../../../Components/Container/Container";
import {useQuery} from '@tanstack/react-query'
import axios from "axios";
const PopularInstractureSection = () => { 

    const {data: users=[]}= useQuery(['users'], async()=>{
          const res = await axios.get('http://localhost:5000/users/inslimit');
          return res.data
    })
    return (
        <div className="mb-40">
            <Container>
                <div className="mt-20">
                    <Zoom>
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Popular Instracture Section</h1>
                    </Zoom>
                    <div className="divider"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        users.map((user, index)=> (
                            <div key={index} className="card w-full border bg-[#239B56]">
                            <div className="card-body">
                                <div className="avatar flex justify-center items-center">
                                    <div className="w-full rounded-full">
                                        <img src={user?.image} />
                                    </div>
                                </div>
                                <h2 className="card-title italic flex justify-center items-center text-white">{user?.name}</h2>
                            </div>
                        </div>
                        ))
                    }
                   
                </div>
            </Container>
        </div>
    );
};

export default PopularInstractureSection;