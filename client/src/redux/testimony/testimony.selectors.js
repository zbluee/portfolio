import { createSelector } from "@reduxjs/toolkit";

const selectTestimony = (state) => state.testimony;

export const selectTestimonyLists = createSelector(
  selectTestimony,
  (testimony) => testimony.testimonyLists
);
