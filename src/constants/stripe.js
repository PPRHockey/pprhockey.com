const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'STRIPE_API_TEST_KEY'
  : 'STRIPE_API_TEST_KEY';
  

export default STRIPE_PUBLISHABLE;

