import Swal from "sweetalert2";
import useAuth from "../../../public/useAuth/useAuth";
import { useQuery } from '@tanstack/react-query'

const AddRole = () => {
    const { user } = useAuth();

    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    });

    const handleInstracture = (insUser) => {
        fetch(`http://localhost:5000/users/${insUser._id}`, {
            method: 'put'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    return (
        <div className="overflow-x-auto w-full px-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Selected Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((newUser, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{newUser?.name}</td>
                                <td>{newUser?.email}</td>
                                <td>{newUser?.role}</td>
                                <td className="space-x-2">
                                     { newUser.role ==="instructor" ? <button disabled className="btn btn-accent normal-case btn-xs">Make Instructor</button>:
                                     <button onClick={()=> handleInstracture(newUser)} className="btn btn-accent normal-case btn-xs">Make Instructor</button>
                                     }
                                   
                                    <button className="btn btn-warning normal-case btn-xs">Make Admin</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AddRole;