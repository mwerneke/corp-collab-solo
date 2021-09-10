const videoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VIDEOS": //Used to as bridgepoint of store videos from server acting as a store accessible when UseSelect is called
      return action.payload;
    default:
      return state;
  }
};

export default videoReducer;
