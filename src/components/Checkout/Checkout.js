import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);


// THE TOKEN ELMENT passes your 
// callback function that will be triggered 
// when the user submits the credit card information. 

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout //from installation
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    
  />

// Token is created by the component 
// upon installation of the library


export default Checkout;