@cds.persistence.skip
service stripeService {
    action createCustomer(name : String, email : String, developerId : String, country : String) returns String;

    entity invoice {
        customer     : String;
        amount       : Integer;
        periodStart  : Date;
        periodEnd    : Date;
        appName      : String;
        appId        : String;
        productName  : String;
        ratePlanName : String;
        calls        : String;
        description  : String;
    };

    action createInvoice(bills: array of invoice) returns array of String;

}
