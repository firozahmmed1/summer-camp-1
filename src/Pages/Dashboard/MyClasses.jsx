import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";


const MyClasses = () => {
     const [axiosSecure] =useAxiosSecure();
     const { data: classes = []} = useQuery(['classes'], async () => {
        const res =await axiosSecure.get('/classes')
        return res.data
    });
    return (
        <div className="overflow-x-auto w-full">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Feedback</th>
                        <th>Status</th>
                        <th>Total Enrolled Students,</th>
                        <th></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((cl, index) => (
                            <tr key={index}>
                            <th>{index+1}</th>
                            <td>{cl?.class_name}</td>
                            <td>{cl?.feedback}</td>
                            <td className="space-x-2">

                            {cl?.status==="pending" ? <button className="btn normal-case btn-warning btn-xs">Pending</button>
                            :<button disabled className="btn normal-case btn-warning btn-xs">Pending</button>}
                            
                            {cl?.status==="approved"?<button className="btn normal-case btn-success btn-xs">Approved</button>
                            :<button disabled className="btn normal-case btn-success btn-xs">Approved</button>}
                            
                            {cl?.status==="denied"?<button className="btn normal-case btn-error btn-xs">Denied</button>
                            :<button disabled className="btn normal-case btn-error btn-xs">Denied</button>}

                            </td>
                            <td>Hello</td>
                            <td><button className="btn normal-case btn-outline btn-accent btn-xs">Update</button></td>
                        </tr>
                        ))
                    }
                   
                </tbody>

            </table>
        </div>
    );
};

export default MyClasses;