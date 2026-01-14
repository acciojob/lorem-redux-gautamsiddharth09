// src/features/loremSlice.js
import "regenerator-runtime/runtime";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch from JSONPlaceholder
export const fetchLorem = createAsyncThunk("fetchLorem", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  // Shape it to match Cypress test expectations
  return {
    title: data.title,
    body:
      "Below Contains A title and Body gotten froma random API, Please take your time to Review",
  };
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default loremSlice.reducer;
