import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import axios from "axios";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: users=[], refetch} = useQuery( ['users'], async () => {
          const res = await axiosSecure.get('http://localhost:5000/users/alldata')
          return res.data
      }) 
const handleMakeAdmin =aduser=>{
       axios.put(`http://localhost:5000/users/makeadmin/${aduser._id}`)
       .then(()=>{refetch()})
}


const handleMAkeInstructor =inuser=>{
    axios.put(`http://localhost:5000/users/makeainstructor/${inuser._id}`)
    .then(()=>{refetch()})
}

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
                {users?.map((user,index) =>
                    <tr key={index}>
                    <th>{user?.name}</th>
                    <td>{user?.email}</td>
                    <td>{user?.role}</td>
                    <td className="space-x-2">
                        
                        {user?.role ==="instructor" ? <button disabled className="btn btn-accent normal-case btn-xs">Instructor</button>
                         :<button onClick={()=>handleMAkeInstructor(user)} className="btn btn-accent normal-case btn-xs">Make Instructor</button>}
                        
                        {user?.role ==="admin" ? <button disabled className="btn btn-warning normal-case btn-xs">Admin</button>
                        :<button onClick={()=>handleMakeAdmin(user)} className="btn btn-warning normal-case btn-xs">Make Admin</button>}
                    </td>
                </tr>
                 )}
                
            </tbody>
        </table>
    </div>
    );
};

export default ManageUser;