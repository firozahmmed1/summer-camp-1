import axios from "axios";
import useAuth from "../../../public/useAuth/useAuth";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const AddaClass = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleAddClasees =event=>{
        event.preventDefault()
        const form = event.target;
        const class_name=form.class_name.value;
        const Instructor_name =form.Instructor_name.value;
        const Instructor_email =form.Instructor_email.value; 
        const seats = form.seats.value;
        const price = form.price.value;
        const image = form.image.files[0];

        const classImg = new FormData();
        classImg.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_CLASS_PHOTO_SECRET}`;
        fetch(url,{
            method:'post',
            body:classImg
        })
        .then(res => res.json())
        .then(data=> {
            const image= data.data.image.url;
            const status='pending'
            const classData = {
                class_name,
                image,
                Instructor_name,
                Instructor_email,
                status,
                seats,
                price
            }
            axios.post('http://localhost:5000/classes',classData)
            .then(res => {
                if(res.data.acknowledged===true){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class Add Done',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    form.reset();
                    navigate('/dashboard/myclasses')
                }
            })
            .catch(()=>{
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Your are not right user',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
        })


        const addClesses = {
            class_name,image ,Instructor_name,Instructor_email,seats,price
        }
        console.log(addClesses)
    }


    return (
        <div className="w-full ">
            <form onSubmit={handleAddClasees} className="form-control grid grid-cols-2 gap-3 w-full">
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Class Name</span>
                    </label>
                    <input type="text" name="class_name"  placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Class Image</span>
                    </label>
                    <input type='file' name="image" accept="image/*"  className="file-input file-input-bordered file-input-warning w-full" />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Instructor Name</span>
                    </label>
                    <input type="text" name="Instructor_name" defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Instructor Email</span>
                    </label>
                    <input type="text"name="Instructor_email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Available Seats</span>
                    </label>
                    <input type="number" name="seats"  placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="space-x-3">
                    <label className="label">
                        <span className="label-text ml-3">Price</span>
                    </label>
                    <input type="number" name="price"  placeholder="Type here" className="input input-bordered w-full " />
                </div>
            <div className="flex items-center justify-center">
                <input type="submit" value="Add" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-10 btn-outline btn-accent" />
            </div>
            </form>
        </div>
    );
};

export default AddaClass;