import Swal from "sweetalert2";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const AddRole = () => {
    const [axiosSecure] =useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res =await axiosSecure.get('/users')
        return res.data
    });
    const handleInstracture = (insUser) => {
        fetch(`https://ass-sever.vercel.app/users/${insUser._id}`, {
            method: 'put'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Instructor Done',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
     }

     const handleAdmin =(adminUser)=>{
        fetch(`https://ass-sever.vercel.app/users/admin/${adminUser._id}`, {
            method: 'put'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin Now',
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
                        users?.map((newUser, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{newUser?.name}</td>
                                <td>{newUser?.email}</td>
                                <td>{newUser?.role}</td>
                                <td className="space-x-2">
                                     { newUser.role ==="instructor" ? <button disabled className="btn btn-accent normal-case btn-xs">Instructor</button>:
                                     <button onClick={()=> handleInstracture(newUser)} className="btn btn-accent normal-case btn-xs">Make Instructor</button>
                                     }
                                   
                                    {newUser.role ==="admin" ? <button disabled className="btn btn-accent normal-case btn-xs">Admin</button>
                                    :<button onClick={()=>handleAdmin(newUser)} className="btn btn-warning normal-case btn-xs">Make Admin</button>
                                    
                                }
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