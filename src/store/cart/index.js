/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const removeSelected = (state, id) => {
  state.selected = state.selected.filter((selectedId) => selectedId !== id);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    added: {},
    selected: [],
  },
  reducers: {
    increment(state, { payload }) {
      const current = state.added[payload.id];
      state.added[payload.id] = current ? current + 1 : 1;
    },
    decrement(state, { payload }) {
      const { added } = state;
      const { id } = payload;

      const current = added[id];

      if (current > 1) {
        added[id] -= 1;
      } else {
        delete added[id];
        removeSelected(state, id);
      }
    },
    remove(state, { payload }) {
      const { id } = payload;

      removeSelected(state, id);
      delete state.added[id];
    },
    select(state, { payload }) {
      const { id } = payload;

      if (payload.isSelected) {
        state.selected.push(id);
      } else {
        removeSelected(state, id);
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
