const cds = require("@sap/cds");
const axios = require("axios");

const CC_PROXY_HOST = process.env.CC_PROXY_HOST;
const CC_PROXY_PORT = process.env.CC_PROXY_PORT;
const MOCK_HOST = process.env.MOCK_HOST || "http://localhost:3000";
const ALERT_NOTIF_SRV = process.env.ALERT_NOTIF_SRV;

async function getExternalOrder(body) {
  var config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (CC_PROXY_HOST && CC_PROXY_PORT) {
    console.log("getExternalOrder: using proxy - ", process.env.CC_PROXY_HOST);
    config = {
      headers: {
        "Content-Type": "application/json",
        "SAP-Connectivity-SCC-Location_ID": "",
      },
      proxy: {
        protocol: "http",
        host: CC_PROXY_HOST,
        port: CC_PROXY_PORT,
      },
    };
  }

  console.log("getExternalOrder: calling url - ", process.env.MOCK_HOST);
  return await axios.post(MOCK_HOST + "/orders", body, config);
}

function sendAlert(data) {
  axios
    .post(ALERT_NOTIF_SRV, data, {})
    .then(function () {
      console.log(
        "--------Submitted error event to Alert Notification--------"
      );
    })
    .catch(function (error) {
      console.log("--------a sendAlert error occurred-------- ", error.message);
    });
}

module.exports = cds.service.impl(async function () {
  this.on("submitorder", async function (req) {
    const res = req._.req.res;
    try {
      const tx = cds.tx(req);
      const srv = await cds.connect.to("OrdersService");
      const { Orders } = srv.entities;

      const { data } = await getExternalOrder(req.data);

      console.log("will send: -------", data);

      const result = await tx.send({
        query: INSERT.into(Orders, data),
      });
      console.log("result:", result.results);
      res.send({ result: result.results });
    } catch (error) {
      console.log("------submitorder-----: ", error.message);
      if (ALERT_NOTIF_SRV) {
        sendAlert({ orderNo: req.data.orderNo, error: error.message });
      }
      res.status(500).send("an error occurred...");
    }
  });

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
    //TODO make month year and developer_id dynamic
    const billList = await apimBill.send(
      "GET",
      "bills?month=06&year=2022&developer_id=martin.frick@sap.com"
    );
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
