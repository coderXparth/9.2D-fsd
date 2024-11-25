import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { db } from './firebase'; // Import db from your firebase file
import { collection, addDoc } from 'firebase/firestore';
import './checkoutform.css';

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);  // Manage loading state
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure stripe and elements are loaded
    if (!stripe || !elements) {
      alert('Stripe.js has not yet loaded.');
      return;
    }

    // Proceed with payment
    setLoading(true);  // Set loading state to true

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[Error]', error);
      alert(`Payment failed: ${error.message}`);
      setLoading(false);  // Reset loading state
    } else {
      console.log('[PaymentMethod]', paymentMethod);

      // After successful payment, store payment details in Firestore
      try {
        await addDoc(collection(db, 'payments'), {
          paymentMethodId: paymentMethod.id,
          status: 'success',
          amount: 5000, // Example amount in cents ($50.00)
          createdAt: new Date(),
        });

        alert('Payment Successful! Your payment details have been stored.');
      } catch (firestoreError) {
        console.error('Error adding payment data to Firestore: ', firestoreError);
        alert('Payment succeeded, but there was an error saving your data.');
      } finally {
        setLoading(false);  // Reset loading state
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={loading || !stripe}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
