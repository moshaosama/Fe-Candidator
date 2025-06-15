import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllGetApplyJob,
  fetchApplyJob,
  fetchGetApplyJobByCandidate,
} from "../Actions/ApplyJob";

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
    builder.addCase(fetchGetApplyJobByCandidate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetApplyJobByCandidate.fulfilled, (state, action) => {
      state.loading = false;
      state.ApplyJob = action.payload;
    });
    builder.addCase(fetchGetApplyJobByCandidate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchAllGetApplyJob.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllGetApplyJob.fulfilled, (state, action) => {
      state.loading = false;
      state.ApplyJob = action.payload;
    });
    builder.addCase(fetchAllGetApplyJob.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default ApplyJobSlice.reducer;
