import { createSelector } from "@reduxjs/toolkit";

const selectService = (state) => state.service;

export const selectServiceLists = createSelector(
  selectService,
  (service) => service.serviceLists
);
