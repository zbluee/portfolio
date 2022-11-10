import { headerActionTypes } from "./header.actiontype";
const INITIAL_STATE = {
  toggle: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headerActionTypes.TOGGLE_MENU_HIDDEN :
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default headerReducer;
