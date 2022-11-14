import { headerActionTypes } from "./header.actiontype";
const INITIAL_STATE = {
  toggleMenu: false,
  toggleTheme: false,
  toggleTab: null,
  toggleSkillsTab: null,
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
    case headerActionTypes.TOGGLE_TAB_CLOSE:
      return {
        ...state,
        toggleTab: action.payload,
      };
    case headerActionTypes.TOGGLE_SKILLS_TAB_CLOSE:
      return {
        ...state,
        toggleSkillsTab: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
