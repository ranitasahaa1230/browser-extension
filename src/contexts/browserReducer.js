const browserReducer = (state, action) => {
    switch (action.type) {
      case "USERNAME":
        return { ...state, userName: action.payload };
      default:
        throw new Error("Action type not found.");
    }
  };
  
  export { browserReducer };
  