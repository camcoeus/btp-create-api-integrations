//import cds from "@sap/cds";
//import { SELECT as SelectRequest, expr, ref, val } from "@sap/cds/apis/cqn";
//import { Service, Request } from "@sap/cds/apis/services";

//import { BillsType } from './vendor/apiportal-service/bills';
//import { billService, stripeService } from './services/index.ts.abc'
//import { Bill } from './models/bill';

const cds = require('@sap/cds')
const DESTINATION = "apim"


class InvoicingService {

    apiportalService;

    async init() {
        this.on("createInvoices", (req) => this.createInvoices(req));
        this.on("hello", (req) => this.hello(req));
        this.apiportalService = await cds.connect.to('apiportal')
    }

    async hello(req) {
        const { Bills } = this.apiportalService.entities;
        this.apiportalService.run(SELECT.from(Bills).limit(1));
    }

    async createInvoices(req) {

        /*try {
            const currentDate = new Date()
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = String(currentDate.getFullYear());
            //const customServicePath = "apiportal/api/1.0/Management.svc"
            const bills: Array<BillsType> = await billService.getBillableBills(month, year, DESTINATION);
            for await (const bill of bills) {
                const customer = await stripeService.getOrCreateCustomer(bill as unknown as Bill)
                const result = await stripeService.createAndSendInvoice(bill as unknown as Bill, customer);
            }
            return req.reply({ success: true });
        } catch (error) {
            console.log(error)
        }*/

    }
}

module.exports = { InvoicingService }