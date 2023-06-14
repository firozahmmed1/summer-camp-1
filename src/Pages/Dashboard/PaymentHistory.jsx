import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../../public/useAuth/useAuth";

const PaymentHistory = () => {
    const {user} = useAuth();
    const[newdata, setNewData] =useState([])
    useEffect(() => {
        axios.get('https://ass-sever.vercel.app/payment')
            .then(res => setNewData(res.data)
            )
    }, [])
   
    console.log(newdata)
    const filtered = newdata.filter(obj => obj.payment.email === user?.email);
    console.log(filtered)
    return (
<div className="overflow-x-auto w-full m-8" >
  <table className="table">
    {/* head */}
    <thead className="bg-orange-500 text-white">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Traaction ID</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map((pa,index)=>( 
         <tr key={index}>
         <th>{index+1}</th>
         <td>{pa?.payment?.name}</td>
         <td>{pa?.payment?.email}</td>
         <td>{pa?.payment?.transactionId}</td>
       </tr>
      ))}
     
    
      
    </tbody>
  </table>
</div>
    );
};

export default PaymentHistory;