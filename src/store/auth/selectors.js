import { createSelector } from '@reduxjs/toolkit';

export const selectState = createSelector((state) => state);

export const selectAuth = createSelector(
  selectState,
  (state) => state.auth,
);

export const token = createSelector(
  selectAuth,
  (auth) => auth.token,
);
