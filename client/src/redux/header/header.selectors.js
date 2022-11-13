import { createSelector } from "@reduxjs/toolkit";

const selectHeader = state => state.header;
export const selectToggleMenu = createSelector(selectHeader, header => header.toggleMenu )
export const selectToggleTheme = createSelector(selectHeader, header => header.toggleTheme )