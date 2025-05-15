import { createSlice } from "@reduxjs/toolkit";
import { fetchGetJobs } from "../Actions/GetJobs";

const initialState = {
  jobs: [],
  loading: false,
  error: "",
};

const JobSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    builder.addCase(fetchGetJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default JobSlice.reducer;
