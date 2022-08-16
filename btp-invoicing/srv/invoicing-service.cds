using {apiportal as apiportalService} from './external/APIPortal_Developer_CF';

@cds.persistence.skip
//@requires : 'any'
@path : 'invoicing'
service InvoicingService {

    //entity Bills as projection on apiportalService.Bills;
    function createStripeInvoices() returns String;
}
