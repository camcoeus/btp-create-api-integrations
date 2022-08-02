@cds.persistence.skip
service ApimService {
    entity developer {
        key id        : String;
            emailId   : String;
            firstName : String;
            lastName  : String;
    }

    entity bill {
            developerId  : String;
            startDate    : String;
            endDate      : String;
            appName      : String;
            appId        : String;
            productName  : String;
            ratePlanName : String;
            billValue    : Decimal;
            calls        : Decimal;
    }
}
