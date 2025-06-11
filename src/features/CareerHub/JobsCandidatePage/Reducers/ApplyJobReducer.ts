import { createSlice } from "@reduxjs/toolkit";
import { fetchApplyJob, fetchGetApplyJobs } from "../Actions/ApplyJob";

const initialState = {
  ApplyJob: {},
  loading: false,
  error: "",
};
const ApplyJobSlice = createSlice({
  name: "ApplyJob",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApplyJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApplyJob.fulfilled, (state, action) => {
      state.loading = false;
      state.ApplyJob = action.payload;
    });
    builder.addCase(fetchApplyJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchGetApplyJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetApplyJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.ApplyJob = action.payload;
    });
    builder.addCase(fetchGetApplyJobs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default ApplyJobSlice.reducer;
