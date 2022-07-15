const cds = require("@sap/cds");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//const stripe = require('stripe')('<secret key here for local testing>');

module.exports = async function stripeService(){
    //const srv = await cds.connect.to('stripeService');
    this.on('createCustomer', async req => {
        let customerId;
        let newCustomer;
        console.log(req.data);
        const customerExists = await stripe.customers.search({
            query: `email:"\`${req.data.email}\`" AND metadata[\"customer_type\"]:\"API_ApplicationDeveloper\"`
        });
        (customerExists.data[0] && customerExists.data[0].id) ? customerId = customerExists.data[0].id : customerId;
        !customerId
          ? newCustomer = await stripe.customers.create({
              description: "Customer for API consumption billing",
              name: req.data.name,
              email: req.data.email,
              metadata: {
                customer_type: "API_ApplicationDeveloper",
                developerId: req.data.email,
                country: req.data.country,
              },
            })
          : newCustomer.id = customerId;
          return newCustomer.id;
    })

    this.on('createInvoice', async req => {
        
    })
}