import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateSavedJob } from "../Action/CreateSavedJobs";
import { fetchGetSavedJobs } from "../Action/getSavedJobs";

const initialState = {
  savedJobs: {},
  isLoading: false,
  error: "",
};

const SavedJobsReducer = createSlice({
  name: "SavedJobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateSavedJob.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCreateSavedJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.savedJobs = action.payload;
    });
    builder.addCase(fetchCreateSavedJob.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchGetSavedJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetSavedJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.savedJobs = action.payload;
    });
    builder.addCase(fetchGetSavedJobs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default SavedJobsReducer.reducer;
