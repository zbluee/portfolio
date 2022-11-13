import { createSelector } from "@reduxjs/toolkit";

const selectSkills = (state) => state.skills;
export const selectSkillCollections = createSelector(
  selectSkills,
  (skills) => skills.skillCollections
);
