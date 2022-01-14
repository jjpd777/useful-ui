import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KHbbdEJ9Q1w9DUS1n0G2vDJODLH22EwfRbKfD9KAMI7c70SkhuzV5LAS9zMlPhA4gTW67gDLQKDKeoLuDzmzPm200M5RHWs9r', {
  stripeAccount: '{{CONNECTED_STRIPE_ACCOUNT_ID}}'
});

export default function StripeCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};