// PaymentPage.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51QFrT5Ei87u2y4a0bR1KReDXVtfhhCWdCYyx0FTDm2NvyQIA8JHnkPwuTWsWkfScIXv17kQaw2QUR1Q5VBUoEkCv00eG3kCQOw');

const PaymentPage = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default PaymentPage;
