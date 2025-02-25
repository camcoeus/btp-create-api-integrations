## Integrate the portal and process
Now that your low code portal is built and request API access process deployed, the final step is to integrate the two, so that the process can be invoked from a request form in the portal.
  * Open the **API Product Detail** page in SAP AppGyver
  * Add a button to the bottom of the canvas and set the label to **Request Access to this API**
  * Create a new page called **API request form**
  * Customize the header and add 3 input fields below. Name them **First Name**, **Last Name**, and **Email**
  * Add a dropdown field component and set the label to **API Product**
  * Add a button and name it Submit
  * Create a page parameter called **APIProduct** (just like the API Product Detail page)
  * Add logic to the Request access button to open the request form and pass the page parameter
  * Create an App Variable called **APIList** as a list of object with 2 properties
     ![Create app variable](img/SetPageVar.png)

  * Modify the outputs of the Basic Card list on the Home page to store the list of API Products during the initial refresh
     ![Component Editor](img/ComponentEditor.png)

  * Click **PROPERTIES** and add  a list of objects to output values with 2 properties as below (note the property key name for later)
     ![Output value](img/OutputValues.png)

  * Return to **VIEW**, select **BASIC CARD LIST 1** from the tree, add a **Set output value** node, and connect it to the output of **Set private data variable**
     ![Set output value](img/SetOutputValue.png)

  * Set the output value to **idDesc** and configure the value as a mapping, as below
     ![Configure mapping](img/BasicCardLogic.png)

  * Exit and save the application
  * Add a **Set app variable** node to the Basic card list and connect it to component tap event
  * Set the assigned value of APIList to the selected component value **List of ids and descriptions**
     ![List of ids](img/SetAppVariable.png)

  * Return to **API request form** page and set the option list and selected value properties as below
      ![Option list](img/RequestForm.png)

  * Use the following formula for the option list:
   ```MAP<item>(appVars.APIList, { label: LOOKUP(item, "title"), value: LOOKUP(item, "id") })```
  * A preview of the app now shows the dropdown list populated and the selected product highlighted as the default
      ![App preview](img/PopulatedForm.png)

  * Add a REST integration under **Data** and point to the API Proxy for the Workflow Instance endpoint. Enable the POST method and add a basic authentication header
    ![REST properties](img/RESTprops.png)

  * Set a custom schema for the POST and enter the input structure from the process
    ![POST custom schema](img/RESTcustomschema.png)\

  * Install the REST countries data component from the component market
  * Configure the REST entity with a query parameter
      * Key: fields
      * Label: fields
      * Value: name,alpha2Code
  * Add a data variable to the form page for RestCountries 
  * Duplicate the API Product dropdown and rename it to Country
  * Set the option list to a mapping, select the data variable for RestCountries, and set the label and value fields to name and alpha2Code respectively
  * Set selected value to No Value
  * Add a page variable with type object, name it processContext, and repeat the field names for the process inputs
    ![Process context variable](./img/processContextSetup.png)

  * Set the **Component onChange** event for each input field in the request form to the corresponding named property of the processContext variable. Set the value to a formula ```STRING(self.value)```
    ![Input field settings](./img/selfValue.png)

  * Use the email field for user id as well, so apply 2 consecutive **Set page variable** nodes attached to each other
    ![Email and User ID](./img/emailUserid.png)

  * Add logic to the submit button, starting with an **If condition**. Set the value to ```IF(IS_NULLY(pageVars.processContext), false, true)```
      * Note that we really need to check every field to ensure they aren't blank but for simplicity sake we'll check the entire object
  * For Output 1, attach a Create Record node and configure the record properties as a custom object, mapping the page parameter values to it. You can retrieve the values from the 2 dropdown menus directy by using Component Properties > Another component's property or output value option
    ![Process context application](./img/processContext.png)

  * For Output 2, attach a Toast dialog and set the message to something like, **Please complete all fields**
  * Add additional toast dialog to the outputs of the **Create record** node to notify of success or failure
    ![Submit button](./img/submitButton.png)
  * Save the application