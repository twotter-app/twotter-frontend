import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type LoadingState = {
  isLoading: boolean;
};

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    updateIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// selectors
export const selectIsLoading = (state: RootState) => state.loading;

// actions
export const { updateIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
