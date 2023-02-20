/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    search: '',
  },
  reducers: {
    search(state, { payload }) {
      state.search = payload;
    },
  },
})

export default catalogSlice.reducer;
export const catalogActions = catalogSlice.actions;
