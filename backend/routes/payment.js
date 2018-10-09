const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

// var stripe = require("stripe")("sk_test_XViNXrM3ecY7ZuRpE8KLSoeD");

// stripe.subscriptions.create({
//   customer: {test_customer},
//   items: [
//     {
//       plan: pro-monthly,
//     },
//   ],
// }, {
//   stripe_account: {test_account},
// }, function(err, subscription) {
//   // asynchronously called
// });



const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    stripe.subscriptions.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = paymentApi;