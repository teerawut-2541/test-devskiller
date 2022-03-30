// * TODO: Implement function for updating user's step data in store
// * TODO: Function for getting user's step data may need some adjustments
module.exports = function stepService(store) {
  const service = {};
  service.get = (username) => store[username];
  service.update = (username, ts, newSteps) => {
    return {
      ...store,
      [username]:{
        ts: ts,
        cumulativeSteps: store[username].cumulativeSteps,
        ...newSteps
      }
    }
  }
  service.add = (username, ts, newSteps) => {
    return {
      ...store,
      [username]:{
        ts: ts,
        ...newSteps
      }
    }
    // Assume that `store` is initially an empty object {}. An example `store` is:
    // {
    //   jenna: {
    //     ts: 1503256778463,
    //     cumulativeSteps: 12323,
    //   },
    //   james: {
    //     ts: 1503256824767,
    //     cumulativeSteps: 587,
    //   },
    // }
    
  };

  return service;
};
