import { Zoom } from "react-awesome-reveal";
import Container from "../../Components/Container/Container"

const InstructorsPage = () => {
    return (
        <Container>
            <Zoom>
                <h1 className=" mt-12 text-5xl text-center font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-red-600">Our Instructors</h1>
            </Zoom>
            <div className="divider"></div>
            <div className="overflow-x-auto mb-40">
                <table className="table">
                    {/* head */}
                    <thead>
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
                        {/* row 1 */}
                        <tr>
                            <th>
                                1
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="rounded w-24">
                                            <img src="https://i.ibb.co/YZv93S9/339266532-527372782919415-6578240290515521451-n.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Purple</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        </Container>
    );
};

export default InstructorsPage;