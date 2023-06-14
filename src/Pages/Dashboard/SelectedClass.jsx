import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";

const SelectedClass = () => {
    const [cartValue, refetch] = useCart()
    const handleDelete =cart=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://ass-sever.vercel.app/booking/${cart._id}`)
                .then(res=> {
                    refetch()
                     if(res.data.deletedCount>0){
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Succesfully Deleted',
                            showConfirmButton: false,
                            timer: 1500
                          })
                     }
                })
            }
          })

       
    }
    return (
        <div className="w-full">
            
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-orange-900 text-white">
                            <tr>
                                <th>Image</th>
                                <th>Course Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartValue.map((cart,index)=> (
                                  <tr key={index}>
                        
                                  <td>
                                      <div className="flex items-center space-x-3">
                                          <div className="avatar">
                                              <div className="mask mask-squircle w-12 h-12">
                                                  <img src={cart?.bookingData?.image} alt="Selected Data" />
                                              </div>
                                          </div>
                                         
                                      </div>
                                  </td>
                                  <td>
                                     {cart?.bookingData?.class_name}
                                  </td>
                                  <td className="text-end">${cart?.bookingData?.price}</td>
                                  <th className="space-x-2">
                                      <Link to={`/dashboard/payment/${cart._id}`} className="btn normal-case btn-accent btn-xs">Pay</Link>
                                      <button onClick={()=>handleDelete(cart)} className="btn normal-case btn-error btn-xs">Delete</button>
                                  </th>
                              </tr>
                            ))
                            }
                          
                        </tbody>
                       
                    </table>
                </div>
            
        </div>
    );
};

export default SelectedClass;



