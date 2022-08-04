import cds from "@sap/cds";
import { SELECT as SelectRequest, expr, ref, val } from "@sap/cds/apis/cqn";
import { ApplicationService } from '@sap/cds';

import { Request } from "@sap/cds/apis/services";
//import { BillsType } from './vendor/apiportal-service/bills';
//import { billService, stripeService } from './services/index.ts.abc'
import { Bill } from './models/bill';

const DESTINATION = "apim"

class InvoicingService extends ApplicationService {


    async init() {
        this.on("createInvoices", (req: any) => this.createInvoices(req));
        this.on("hello", (req: Request) => this.hello(req));
    }

    hello(req: Request) {
        /*const apiportalService: any = await cds.connect.to('apiportal')
        const { Bills } = apiportalService.entities;
        console.log("TEST", apiportalService)
        */
        //apiportalService.run(SELECT.from(Bills).limit(1));
        return {}
    }

    async createInvoices(req: Request) {

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