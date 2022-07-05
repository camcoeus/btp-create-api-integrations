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
    billValue    : Decimal;
    appName      : String;
    appBillValue : Decimal;
  }
}