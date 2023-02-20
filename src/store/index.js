import { configureStore } from '@reduxjs/toolkit';
import persistState from 'redux-localstorage';
import authSlice from './auth';
import cartReducer from './cart';
import catalogReducer from './catalog';

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartReducer,
    catalog: catalogReducer,
  },
  enhancers: [persistState()],
})
