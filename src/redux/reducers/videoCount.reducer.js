const countReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREASE": //Fill out
        return state + 1;
      case "DECREASE":
        return state - 1;
      default:
    }
    return state;
  };
  export default countReducer;