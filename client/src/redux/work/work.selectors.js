import { createSelector } from "@reduxjs/toolkit";

const selectWork = (state) => state.work;

export const selectWorkLists = createSelector(
  selectWork,
  (work) => work.workLists
);
