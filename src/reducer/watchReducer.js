const watchReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state,
        seconds: action.payload.seconds,
        initial: false,
        running: true,
      };
    case "LAPSE":
      if (state.seconds === 0)
        return {
          ...state,
          running: false,
          seconds: action?.payload?.seconds || 0,
        };
      return { ...state, running: true, seconds: state.seconds - 1 };
    case "STOP":
      return { ...state, running: false };
    case "TOGGLE":
      return { ...state, running: !state.running };
    case "RESET":
      return { ...state, running: false, seconds: action.payload.seconds };
    default:
      return state;
  }
};

export default watchReducer;
