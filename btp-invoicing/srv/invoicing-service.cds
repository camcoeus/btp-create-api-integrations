using {apiportal as apiportalService} from './external/APIPortal_Developer_CF';

@cds.persistence.skip
@path : 'invoicing'
service InvoicingService {

    //entity Bills as projection on apiportalService.Bills;
    action createStripeInvoices(month: String, year: String) returns String;
}
