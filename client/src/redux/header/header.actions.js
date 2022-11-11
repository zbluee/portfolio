import { headerActionTypes } from "./header.actiontype";

export const toggleMenuHidden = () => ({
  type: headerActionTypes.TOGGLE_MENU_HIDDEN,
});

export const toggleThemeDark = () => ({
  type: headerActionTypes.TOGGLE_THEME_DARK,
});
