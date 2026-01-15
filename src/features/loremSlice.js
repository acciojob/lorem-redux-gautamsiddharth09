import "regenerator-runtime/runtime";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
console.log("data =>",data)
  return data;
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
    hasStarted: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.isLoading = true;
        state.hasStarted = true;
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
