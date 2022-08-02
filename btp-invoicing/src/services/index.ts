import BillService from "./bill-service";
import StripeService from "./stripe-service";

const stripeService = new StripeService(process.env.STRIPE_API_KEY as string);
const billService = new BillService;

export {
    billService,
    stripeService
}