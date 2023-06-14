import Container from "../../Components/Container/Container";
import {useQuery} from '@tanstack/react-query';
import axios from "axios";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import useInstructor from "../../Hooks/useInstructor/useInstructor";
import useAuth from "../../../public/useAuth/useAuth";
import Swal from 'sweetalert2'
import useCart from "../../Hooks/useCart";




const Classes = () => {
  const [isAdmin]=useAdmin();
  const [isInstructor] =useInstructor();
  const{user} = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [cartValue,refetch] =useCart();
  
   
    const {data: classes=[]} = useQuery(['classes'], async()=>{
        const res = await axios.get('http://localhost:5000/classes/allclasses')
        return res.data
    }) 

    const handleMessage =()=>{
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Please Login',
            showConfirmButton: false,
            timer: 2000
          })
    }
   const handleBookin =bookingData=>{
         axios.post('http://localhost:5000/booking',{bookingData,email:user?.email, level:'booked'})
         .then(res => {
            refetch();
            if(res.data.acknowledged===true){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Booked',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })
   }

  
    return (
        
            <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 mb-40 gap-5">
            {classes.map((cla,index)=>(
                <div key={index} className="card w-full bg-[#239B56] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={cla?.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-white">{cla?.class_name}</h2>
                    <p>Instructor name: <span className="text-pink-800">{cla?.Instructor_name}</span></p>
                    <p>Available seats: <span className="font-bold text-white">50</span> </p>
                    <p>Price: <span className="text-xl font-semibold text-purple-600">$10</span> </p>
                    <div className="card">
                        {isAdmin || isInstructor ? <button disabled type="button" className="px-8 py-3 text-white bg-red-200 rounded focus:outline-none">Select</button>
                        :
                        <>
                        {!user?<button onClick={handleMessage} className="btn btn-accent normal-case">Select</button> 
                        :<button onClick={()=>handleBookin(cla)} className="btn btn-accent normal-case">Select</button> }
                        </>   
                        }
                    </div>
                </div>
            </div>
            ))
            }
            
            </div>
        </Container>
        

    );
};

export default Classes;