import StatusCodes from 'http-status-codes';
import { NextFunction, Request, Response, Router } from 'express';

import { BillsType } from '@vendor/apiportal-service/bills';

import { stripeService, billService } from '@services';
import { Bill } from '@models/bill';

// Constants
const router = Router();
const { OK } = StatusCodes;
const DESTINATION: string = process.env.DESTINATION as string;

// Paths
export const paths = {
    bills: '/bills',
    createInvoices: '/create',
};

router.get(paths.bills, async (req: Request, res: Response, next: NextFunction) => {
    try {
        let month;
        let year;
        if (req.params.month && req.params.year) {
            month = req.params.month;
            year = req.params.year;
        }
        else {
            const currentDate = new Date()
            month = String(currentDate.getMonth() + 1).padStart(2, '0');
            year = String(currentDate.getFullYear());
        }
        const bills: Array<BillsType> = await billService.getBillableBills(month, year, DESTINATION);
        return res.status(OK).json(bills);
    }
    catch (error) {
        next(error)
    }
});

router.get(paths.createInvoices, async (_: Request, res: Response, next: NextFunction) => {
    try {
        const currentDate = new Date()
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = String(currentDate.getFullYear());
        //const customServicePath = "apiportal/api/1.0/Management.svc"
        const bills: Array<BillsType> = await billService.getBillableBills(month, year, DESTINATION);
        for await (const bill of bills) {
            const customer = await stripeService.getOrCreateCustomer(bill as unknown as Bill)
            const result = await stripeService.createAndSendInvoice(bill as unknown as Bill, customer);
        }
        return res.status(OK).json({ success: true });
    } catch (error) {
        next(error)
    }
});

// Export default
export default router;
