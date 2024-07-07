// features/sampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = sampleSlice.actions;

export default sampleSlice.reducer;
