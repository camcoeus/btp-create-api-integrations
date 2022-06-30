using {sap.capire.orders as ord} from '../db/schema';
using {sap.common as cur} from '../db/schema';

@requires : 'authenticated-user'
service OrdersService {

  entity Orders @(restrict : [{
    grant : ['READ'],
    to    : ['User']
  }]) as projection on ord.Orders

  entity Currencies @(restrict : [{
    grant : ['READ'],
    to    : ['User']
  }]) as projection on cur.Currencies

}

service ExternalService {
  action submitorder(orderNo : Integer);
}

@requires : 'system-user'
service SystemService {
  entity Orders as projection on ord.Orders
}

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

annotate Orders with @odata.draft.enabled;
