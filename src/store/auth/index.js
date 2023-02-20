/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import * as selectors from './selectors';

const getTokenFromLS = () => {
  try {
    return JSON.parse(localStorage.getItem('DOGSHOP_LS_KEY'));
  } catch (error) {
    return '';
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getTokenFromLS(),
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = '';
    },
  },
});

export default authSlice;
export const authSelectors = selectors;
