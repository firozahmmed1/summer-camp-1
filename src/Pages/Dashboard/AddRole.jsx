import useAuth from "../../../public/useAuth/useAuth";

const AddRole = () => {
    const {user}=useAuth();
    return (
        <div className="overflow-x-auto w-full px-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Selected Role</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>{user?.displayName}</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td className="space-x-2">
                            <button className="btn btn-accent normal-case btn-xs">Make Instructor</button>
                            <button className="btn btn-warning normal-case btn-xs">Make Admin</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddRole;