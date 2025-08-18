import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import checkInReducer from './checkInSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    checkIn: checkInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 