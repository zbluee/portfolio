import { createSelector } from "@reduxjs/toolkit";

const selectHeader = (state) => state.header;
export const selectToggleMenu = createSelector(
  selectHeader,
  (header) => header.toggleMenu
);
export const selectToggleTheme = createSelector(
  selectHeader,
  (header) => header.toggleTheme
);
export const selectToggleTab = createSelector(
  selectHeader,
  (header) => header.toggleTab
);
export const selectToggleSkillsTab = createSelector(
  selectHeader,
  (header) => header.toggleSkillsTab
);
