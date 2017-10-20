const CONFIGURATION = {
  themeColor: '#134896',

  // Funding Goal
  goal: '7500', // adjustable during funding campaign
  currency: 'EUR', // supported currencies at https://stripe.com/docs/currencies

  // Checkout Form
  checkoutTitle: 'Thank you!', // just a message for your supporter
  checkoutDescription: 'Road to learn React Funding', // shows up in your Stripe payment dashboard
  checkoutButtonLabel: 'Fund',
  callToAction: 'Fund it!',
  defaultAmount: 25,

  // Payment
  paymentServerUrl: process.env.PAYMENT_SERVER_URL,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
};

export default CONFIGURATION;
