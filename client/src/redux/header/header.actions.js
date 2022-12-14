import { headerActionTypes } from "./header.actiontype";

export const toggleMenuHidden = () => ({
  type: headerActionTypes.TOGGLE_MENU_HIDDEN,
});

export const toggleThemeDark = () => ({
  type: headerActionTypes.TOGGLE_THEME_DARK,
});

export const toggleTabClose = (id) => ({
  type: headerActionTypes.TOGGLE_TAB_CLOSE,
  payload: id,
});

export const toggleSkillsTabClose = (id) => ({
  type: headerActionTypes.TOGGLE_SKILLS_TAB_CLOSE,
  payload: id,
});

export const scrollToTop = (isScrolled) => ({
  type: headerActionTypes.SCROLL_TO_TOP,
  payload: isScrolled,
});

export const hoverActiveNav = (navName) => ({
  type: headerActionTypes.HOVER_ACTIVE_NAV,
  payload: navName,
});
