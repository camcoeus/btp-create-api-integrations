const got = require('got');

async function main() {

  const [capCredentials] = await Promise.all([get_capCredentials()]);
  
  await cap_createInvoices(capCredentials.access_token);
  console.log("Invoices updated");
  console.log(`${new Date().toISOString()}: done`);

  process.exit(0);
}

/********************************************************
 *  CAP Service                                         *
 ********************************************************/
const cap_credentials_url = process.env.CAP_CREDENTIALS_URL;
const post_data = 'grant_type=client_credentials&scope=createinvoices';
const cap_config = {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(`${process.env.CAP_CREDENTIALS_ID}:${process.env.CAP_CREDENTIALS_SECRET}`).toString("base64"),
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': post_data.length
  },
  body: post_data
}; 

async function get_capCredentials() {
  try {
    const result = await got(cap_credentials_url, cap_config);
    return JSON.parse(result.body);
  } catch (err) {
    console.log("An Error has occurred during requesting the cap credentials");
    throw err;
  }
}

const cap_request_url = process.env.CAP_URL;
const cap_request_config = {
  headers: {
    'Authorization': '',
    'Content-Type': 'application/json'
  }
};

async function cap_createInvoices(access_token) {
  try {
    cap_request_config.headers.Authorization = 'Bearer ' + access_token;
    const result = await got.post(cap_request_url, cap_request_config);
    return [JSON.parse(result.body), null];
  } catch (err) {
    console.log("An Error has occurred during invoice update: " + err);
    //throw err;
    return [null, err];
  }
}

main();