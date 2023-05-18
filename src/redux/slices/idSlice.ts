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

export const fetchId = createAsyncThunk(
  'news/fetchNewsById',
  async (id: number | undefined) => {
    const result = await axios.get(`/item/${id}.json`).then(({ data }) => data);

    return result;
  }
);

// @ts-ignore
export const idSlice = createSlice({
  name: 'newsId',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchId.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default idSlice.reducer;
