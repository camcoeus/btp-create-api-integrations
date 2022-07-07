require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

(async () => {
  const customer = await stripe.customers.create({
    description: 'Customer for API consumption billing',
  name: 'James Rapp',
  email: 'james.rapp@sap.com',
  metadata: {
    customer_type: 'API_ApplicationDeveloper',
    developerId: '123',
    country: 'USA'
  }
  });

  console.log(customer.id);
})();