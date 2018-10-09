const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'STRIPE_API_KEY'
    : 'STRIPE_API_KEY';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;