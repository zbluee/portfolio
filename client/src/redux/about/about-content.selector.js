import { createSelector } from "@reduxjs/toolkit";

const selectAbout = (state) => state.about;

export const selectContents = createSelector(
  selectAbout,
  (about) => about.contents
);
