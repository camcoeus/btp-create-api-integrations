import moment from 'moment';

import { apiportalService } from '@vendor/apiportal-service/bills/service';
import { BillsType } from '@vendor/apiportal-service/bills';

export default class BillService {

    public getBillableBills = async (month: string, year: string, destinationName: string, customServicePath?: string): Promise<Array<BillsType>> => {
        const { billsApi } = apiportalService();
        const schema = billsApi.schema
        const query = billsApi.requestBuilder().getAll()

            .filter(
                schema.FROM_DATE.equals(this.createFromDate(month, year)),
                schema.TO_DATE.equals(this.createToDate(month, year)),
                schema.TOTAL.greaterThan(0),
                schema.ENTITY_TYPE.equals("DEVELOPER")
            )
        if (customServicePath) {
            query.setCustomServicePath(customServicePath)
        }
        const bills: Array<BillsType> = await query.execute({ destinationName: destinationName });
        bills.forEach((bill: BillsType) => {
            bill.billDetails = JSON.parse(bill.billDetails as string);
        })
        return bills
    }

    private createFromDate = (month: string, year: string) => {
        return moment(`${year}-${month}-01T00:00:00.000Z`)
    }

    private createToDate = (month: string, year: string) => {
        return moment(`${year}-${month}-31T23:59:59.000Z`)
    }
}