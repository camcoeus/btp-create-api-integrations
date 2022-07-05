const cds = require("@sap/cds");

module.exports = cds.service.impl(async function () {
    this.on("READ", "developer", async function (req) {
        console.log("enter dev");
        const apimDev = await cds.connect.to("developers");
        console.log("connected to apimDev");
        const developerList = await apimDev.send(
          "GET",
          "Developers?$select=id,emailId,firstName,lastName"
        );
        return developerList;
      });

      this.on("READ", "bill", async function (req) {
        console.log("enter bill");
        const apimBill = await cds.connect.to("monetize");
        console.log("connected to apimBill");
        let billList;
        //TODO make month year dynamic
        (req.params && req.params[0]) ?
        billList = await apimBill.send(
          "GET",
          `bills?month=06&year=2022&developer_id=${req.params[0].developerId}`
        ) : billList = [{}];
        console.log(billList);
        //TODO cover multiple applications
        const bills = billList.reduce((acc, curVal) => {
          return [
            ...acc,
            {
              developerId: curVal.developerId,
              startDate: curVal.startDate,
              endDate: curVal.endDate,
              billValue: curVal.bill.value,
              appName: curVal.apps[0].appName,
              appBillValue: curVal.apps[0].bill.value,
            },
          ];
        }, []);
        console.log(bills);
        return bills;
      });
});