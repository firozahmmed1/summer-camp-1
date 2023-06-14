
const MyEnrolledClasses = () => {
    return (
        <div className="overflow-x-auto w-full m-4">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>status</th>
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

                        <td></td>
                        <td>
                            <button className="btn btn-accent btn-sm">Paid</button>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyEnrolledClasses;