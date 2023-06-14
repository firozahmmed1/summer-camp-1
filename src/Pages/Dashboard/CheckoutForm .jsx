import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import  "./CheckoutFrom.css"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../public/useAuth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CheckoutForm = ({price, id}) => {
    const navigate = useNavigate();
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] =useState('') 
    const [axiosSecure]=useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res=> {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[price, axiosSecure]) 

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        } 
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            setCardError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
       
          const {paymentIntent, error:ConfirmError} = await stripe.confirmCardPayment(
                clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'unknown'
                },
              },
            },
          );
          if(ConfirmError){
            console.log(ConfirmError)
          }
          if(paymentIntent.status==="succeeded"){ 
            const payment ={
                email:user?.email,
                name:user?.displayName,
                transactionId:paymentIntent.id,
                courseId:id
            }
             axios.post('http://localhost:5000/payment', {payment})
              .then(res => console.log(res.data))
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment SuccesFully Done',
                showConfirmButton: false,
                timer: 1500
              })
          } 

    }

    return (
        <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-600">{cardError}</p>
            <button className="btn btn-outline btn-accent btn-xs" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;