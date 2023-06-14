import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm ";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_PK);
const Payment = () => {
    const { id } = useParams()
    const [cartValue] = useCart();
    const priceobject = cartValue.find(ca => ca._id === id);
    const price = priceobject?.bookingData?.price;
    return (
        <div className="w-full">
            <h1 className="text-2xl mb-4 font-semibold text-center text-orange-600">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={id}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;