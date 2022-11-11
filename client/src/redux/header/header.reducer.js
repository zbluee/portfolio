import { headerActionTypes } from "./header.actiontype";
const INITIAL_STATE = {
  toggleMenu: false,
  toggleTheme: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headerActionTypes.TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
    case headerActionTypes.TOGGLE_THEME_DARK:
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    default:
      return state;
  }
};

export default headerReducer;
