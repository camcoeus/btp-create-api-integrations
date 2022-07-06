const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
  this.on("READ", "developer", async function (req) {
    console.log("enter developer service");
    const apimDev = await cds.connect.to("developers");
    console.log("connected to apim - developer");
    const developerList = await apimDev.send(
      "GET",
      "Developers?$select=id,emailId,firstName,lastName"
    );
    return developerList;
  });

  this.on("READ", "bill", async function (req) {
    console.log("enter bill service");
    const apimBill = await cds.connect.to("monetize");
    console.log("connected to apim - monetize");
    let billList;
    let params = req._.req.query;
    params.month && params.year && params.developer_id
      ? (billList = await apimBill.send(
          "GET",
          `bills?month=${params.month}&year=${params.year}&developer_id=${params.developer_id}`
        ))
      : (billList = []);
    //TODO test multiple applications
    if (billList[0].apps) {
    const apps = billList[0].apps;
    let appLineItems = apps
      .map((app) => {
        let productLineItems = app.ratePlanSubscribed.flat();
        let pLI = productLineItems.reduce((acc, curVal) => {
          return [
            ...acc,
            {
              developerId: billList[0].developerId,
              startDate: billList[0].startDate,
              endDate: billList[0].endDate,
              appName: app.appName,
              appId: app.appId,
              productName: curVal.productName,
              ratePlanName: curVal.ratePlanName,
              billValue: curVal.bill.value,
              calls: curVal.calls,
            },
          ];
        }, []);
        return pLI;
      })
      .flat();
    console.log(appLineItems);
    return appLineItems;
    } else return []
  });
});
