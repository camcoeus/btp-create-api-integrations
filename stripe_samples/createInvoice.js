require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

(async () => {
  const invoiceItem1 = await stripe.invoiceItems.create({
    customer: "cus_M13RWfUqpJ1QOo",
    amount: 1008,
    currency: "usd",
    period: {
        end: 1659333599,
        start: 1656655200
    },
    metadata: {
        appName: "KymaCAPExternal_Bestrun",
        productName: "KymaCapExternal",
        ratePlanName: "KymaCAPExternal_Basic",
        calls: "8"
    },
    description: "API calls to KymaCapExternal product in KymaCAPExternal_Bestrun application (8)"
  });

  const invoiceItem2 = await stripe.invoiceItems.create({
    customer: "cus_M13RWfUqpJ1QOo",
    amount: 515,
    currency: "usd",
    period: {
        end: 1659333599,
        start: 1656655200
    },
    metadata: {
        appName: "KymaCAP_Bestrun",
        productName: "KymaCap",
        ratePlanName: "KymaCAP_TierGold",
        calls: "15"
    },
    description: "API calls to KymaCap product in KymaCAP_Bestrun application (15)"
  });

  // Create an Invoice
  const invoice = await stripe.invoices.create({
    customer: "cus_M13RWfUqpJ1QOo",
    collection_method: "send_invoice",
    days_until_due: 30,
  });

  // Send the Invoice
  await stripe.invoices.sendInvoice(invoice.id);
})();
