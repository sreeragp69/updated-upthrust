import { createSlice } from '@reduxjs/toolkit';

interface CheckInState {
  shouldRefetch: boolean;
}

const initialState: CheckInState = {
  shouldRefetch: false,
};

const checkInSlice = createSlice({
  name: 'checkIn',
  initialState,
  reducers: {
    triggerRefetch: (state) => {
      state.shouldRefetch = true;
    },
    clearRefetch: (state) => {
      state.shouldRefetch = false;
    },
  },
});

export const { triggerRefetch, clearRefetch } = checkInSlice.actions;
export default checkInSlice.reducer;


