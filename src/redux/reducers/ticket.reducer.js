const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TICKETS": //Used to as bridgepoint of store tickets from server acting as a store accessible when UseSelect is called
      return action.payload;
    default:
      return state;
  }
};

export default ticketReducer;
