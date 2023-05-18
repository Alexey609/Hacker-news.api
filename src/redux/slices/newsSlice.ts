import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const axios = Axios.create({ baseURL: `https://api.hnpwa.com/v0` });

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
  const result = await Promise.all(
    [1, 2, 3, 4].map((i) =>
      axios.get(`/newest/${i}.json`).then(({ data }) => data)
    )
  );

  return result.reduce((a, b) => [...a, ...b], []).slice(0, 100);
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
