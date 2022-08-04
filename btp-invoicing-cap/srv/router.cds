//using {apiportal as apiportalService} from './external/APIPortal_Developer_CF';

@cds.persistence.skip
service InvoicingService {

    //entity Bills as projection on apiportalService.Bills;
    function hello()          returns {};
    action   createInvoices() returns {};
}
