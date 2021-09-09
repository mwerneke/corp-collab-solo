const searchReducer = (state = [], action) => {
    switch (action.type) {      
      case "SEARCH-VIDEO":          //Used to as bridgepoint of store videos from server acting as a store accessible when UseSelect is called
        return action.payload;
      default:
        return state;
    }
  };

  export default searchReducer