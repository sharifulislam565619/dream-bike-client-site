import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvnHtJk7W4cFWOVYQs9UfJru8bMTh3Y5uEK5nXd9Npy5eGTjC4zfBwSgsGb5D5dHIvrsTZPP5M1YumigcGeBLOE00gt4kPA5C')
const Payment = () => {
   const options = {
      clientSecret: '{{sk_test_51JvnHtJk7W4cFWOVQcSaRu5QROGDVJypp3kWeck03B5HJmvVSL2YFg9vZCnFJKzXunBHNV3wReRniXnZb931a7jG00FjWEtVur}}',
   }
   return (
      <div>
         <h2 style={{ fontStyle: "italic", marginTop: "100px", color: "#0ba75f" }} >Payment</h2>

         <Elements stripe={stripePromise}>
            <CheckoutForm />
         </Elements>
      </div>
   );
};

export default Payment;