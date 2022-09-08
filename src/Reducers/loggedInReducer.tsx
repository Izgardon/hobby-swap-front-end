const loggedInReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case "change":
      return !state;

    default:
      return state;
  }
};

export default loggedInReducer;
