const browserReducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, userName: action.payload };
    case "GETTIME":
      return { ...state, time: action.payload };
    case "GREETINGS":
      return {
        ...state,
        greetings:
          action.payload >= 0 && action.payload < 12
            ? "Good Morning"
            : action.payload === 12
            ? "Good Noon"
            : action.payload >= 12 && action.payload <= 17
            ? "Good Afternoon"
            : "Good Evening",
      };
      case "TASKS":
        return { ...state, tasks: action.payload };
      case "GETQUOTES":
        return { ...state, quotesOfTheDay: action.payload };
    default:
      throw new Error("Action type not found.");
  }
};

export { browserReducer };
