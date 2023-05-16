import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../../Api/hnApi';

export interface NewsState {
  isLoading: boolean;
  data: any;
  isError: boolean;
}

const initialState: NewsState = {
  isLoading: false,
  data: null,
  isError: false,
};

export const fetchStore = createAsyncThunk('fetchStore', async () => {
  const response = await fetchNews();
  return response;
});

// @ts-ignore
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchStore.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default newsSlice.reducer;
