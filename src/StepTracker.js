const StepService = require('./step.service');
const restAPI = require('./rest-api');
const wsServerAPI = require('./wsServer-api');

module.exports = class StepTracker {
  constructor(store) {
    if (store) {
      this.store = store;
    } else {
      this.store = {
        jenna: {
          ts: 1503256778463,
          cumulativeSteps: 12323,
        },
        james: {
          ts: 1503256824767,
          cumulativeSteps: 587,
        },
      };
    }

    const stepService = StepService(this.store);

    // Start serving the REST API
    restAPI(stepService);

    // Start serving the WebSocket API
    wsServerAPI(stepService);
  }
};
