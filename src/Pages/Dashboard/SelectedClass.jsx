import { Link } from "react-router-dom";

const SelectedClass = () => {
    return (
        <div className="w-full">
            
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                        
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                </td>
                                <td>Purple</td>
                                <th className="space-x-2">
                                    <Link to="/dashboard/payment" className="btn normal-case btn-accent btn-xs">Pay</Link>
                                    <button className="btn normal-case btn-error btn-xs">Delete</button>
                                </th>
                            </tr>
                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            
        </div>
    );
};

export default SelectedClass;