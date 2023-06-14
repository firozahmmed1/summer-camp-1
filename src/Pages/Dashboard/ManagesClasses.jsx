import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";

const ManagesClasses = () => {
    const feebackRef = useRef(null)
    const[axiosSecure]=useAxiosSecure();
    const { data: adminUser = [], refetch } = useQuery(['adminUser'], async () => {
        const res =await axiosSecure.get('/classes/admindata')
        return res.data
    });
    const handledleSatsus =(role, ad)=>{
     axios.put(`https://ass-sever.vercel.app/classes/updatedata/${ad._id}`,{status:role})
    .then(()=> {
        refetch()
    })
}
const handleModal=(ml)=>{
    const feedback = feebackRef.current.value;
    axios.put(`https://ass-sever.vercel.app/classes/adminmodal/${ml._id}`,{feedback:feedback})
    .then(res =>{console.log(res.data)
        refetch()
        if(res.data.acknowledged===true){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Feedback Send',
                showConfirmButton: false,
                timer: 1500
              })
        } 
    })
}
    return (
        <div>
        <div className="grid grid-cols-l md:grid-cols-2 gap-3">
            {
              adminUser.map((ad,index)=>(
                <div key={index}  className="card w-full bg-purple-500 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={ad?.image} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-start text-center">
                    <h2 className="text-white text-xl font-semibold">{ad?.class_name}</h2>
                    <h2 className="text-white">Instructor Name:<span className="text-green-200"> {ad?.Instructor_name}</span> </h2>
                    <h2 className="text-white">Instructor Email:<span className="text-red-200"> {ad?.Instructor_email}</span> </h2>
                    <h2 className="text-white">Available seats:<span className="text-yellow-300"> {ad?.seats}</span> </h2>
                    <h2 className="text-white">Price:<span className="text-green-400 text-xl font-bold">$ {ad?.price}</span> </h2>
                    <div className="card-actions">
                       {ad.status ==="approved" || ad.status ==="denied" ?<>
                        <button disabled  className="btn btn-success btn-sm "> Approve</button>
                        <button disabled  className="btn btn-error btn-sm ">Deny</button>
                        </>:
                        <>
                        <button onClick={()=>handledleSatsus('approved',ad)} className="btn btn-success btn-sm "> Approve</button>
                        <button onClick={()=>handledleSatsus('denied',ad)} className="btn btn-error btn-sm ">Deny</button>
                        </>}
                    </div>
                    <button  onClick={()=>window.my_modal_1.showModal()} className="btn btn-accent btn-outline btn-sm normal-case">Feedback</button>
              </div>
            </div>
              ))
            }
           


            </div>
            <dialog id="my_modal_1" className="modal">
                        {
                            adminUser.map((ml,index) => (
                                <form key={index} method="dialog" className="modal-box">
                                <textarea ref={feebackRef} defaultValue= ' ' className="textarea textarea-success" placeholder="Feedback"></textarea>
                                <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={()=>handleModal(ml)} className="btn btn-accent">Send</button>
                                <button className="btn btn-error">Close</button>
                            </div>
                        </form>
                            ))
                        }
            </dialog>
              
            <div className="overflow-x-auto">
  
</div>     
        </div>
    );
};

export default ManagesClasses;