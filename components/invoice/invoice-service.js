const cds = require("@sap/cds");


module.exports = cds.service.impl(async function () {
  this.on("createinvoices", async function (req) {
    const res = req._.req.res;
    try {
      const tx = cds.tx(req);
      console.log("Invoices successfully created");
      res.send("Invoices successfully created");
    } catch (error) {
      console.log("Error creating the invoices");
      res.status(500).send("an error occurred...");
    }
  });
});
