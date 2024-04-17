const { monitorSalesforceCommunication } = require('./salesforce');
const { controlBusylight } = require('./busylightcontrol');

async function main() {
  try {
    const communicationActivities = await monitorSalesforceCommunication();
    
    controlBusylight(communicationActivities);

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();
