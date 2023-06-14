import { Zoom } from "react-awesome-reveal";
import Container from "../../Components/Container/Container"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const InstructorsPage = () => {
    const{data:intructors=[]}= useQuery(['intructors'], async()=>{
           const res = await axios.get('https://ass-sever.vercel.app/users/insalldata')
              return res.data
    })
    console.log(intructors)
    return (
        <Container>
            <Zoom>
                <h1 className=" mt-12 text-5xl text-center font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Our Instructors</h1>
            </Zoom>
            <div className="divider"></div>
            <div className="overflow-x-auto mb-40">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-700 text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            intructors.map((ins,index)=> (
                                <tr key={index} className="bg-slate-300">
                                <th>
                                    {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded w-24">
                                                <img src={ins?.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xl font-semibold text-green-950">
                                    {ins?.name}
                                </td>
                                <td className="text-pink-600">{ins?.email}</td>
                                
                            </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </div>

        </Container>
    );
};

export default InstructorsPage;