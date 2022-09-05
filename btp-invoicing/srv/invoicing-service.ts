import { ApplicationService } from '@sap/cds';
import { Request } from "@sap/cds/apis/services";

import { InvoicingServiceTypes } from "./models/entities";
import { billService, stripeService } from "./services";
import { IBill } from "./models/bill";
import Stripe from 'stripe';

class InvoicingService extends ApplicationService {

    async init() {
        this.on(InvoicingServiceTypes.FuncCreateInvoices.name, this.createStripeInvoices)
    }

    private createStripeInvoices = async (req: Request) => {
        try {
            const currentDate = new Date();
            const month: string = String(currentDate.getMonth()).padStart(2, '0'); // e.g., "07"
            const year: string = String(currentDate.getFullYear()); // e.g., "2022"

            const bills: Array<IBill> = await billService.getBillableBills(month, year);
            let invoicesSent = 0
            for await (const bill of bills) {
                const customer: Stripe.Customer = await stripeService.getOrCreateCustomer(bill as unknown as IBill);
                const success: boolean = await stripeService.createAndSendInvoice(bill as unknown as IBill, customer);
                if (success) {
                    invoicesSent += 1;
                }
            }
            let message;
            if (invoicesSent > 0) {
                message = `${invoicesSent} ${invoicesSent == 1 ? "invoice has" : "invoices have"} been sent successfully to the ${invoicesSent == 1 ? "customer" : "customers"}`;
            }
            else {
                message = "There was no valid or open bill to send to a customer";
            }
            return req.reply({ success: true, message: message })
        } catch (error) {
            console.log(error)
        }
    };
}

module.exports = { InvoicingService }