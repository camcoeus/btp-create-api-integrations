service stripeService {
    action createCustomer(name : String, email : String, developerId : String, country : String) returns String;
    action createInvoice(customer : String, amount : Integer, periodStart : Date, periodEnd : Date, appName : String, productName : String, ratePlanName : String, calls : String, description : String);

}