

// src/features/loremSlice.js
import "regenerator-runtime/runtime"; // <--- add this at the very top
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem = createAsyncThunk("fetchLorem", async () => {
  const res = await fetch("https://api.lorem.com/ipsum");
  const data = await res.json();
  return data;
});


export const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLorem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLorem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLorem.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default loremSlice.reducer;
