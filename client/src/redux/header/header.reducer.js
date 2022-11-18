import { headerActionTypes } from "./header.actiontype";
const INITIAL_STATE = {
  toggleMenu: false,
  toggleTheme: false,
  toggleTab: null,
  toggleSkillsTab: null,
  scrollUp: false,
  activeNav: "home",
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
    case headerActionTypes.SCROLL_TO_TOP:
      return {
        ...state,
        scrollUp: action.payload,
      };
    case headerActionTypes.HOVER_ACTIVE_NAV:
      return {
        ...state,
        activeNav: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
