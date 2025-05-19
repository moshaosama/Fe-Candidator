import { createSlice } from "@reduxjs/toolkit";
import { fetchGetJobs } from "../Actions/GetJobs";
import { fetchGetJobByID } from "../Actions/GetJobById";
import { fetchUpdateCandidateinStage } from "../Actions/UpdateCandidateinStage";

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
    builder.addCase(fetchUpdateCandidateinStage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUpdateCandidateinStage.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    builder.addCase(fetchUpdateCandidateinStage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

const JobByIdSlice = createSlice({
  name: "JobById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetJobByID.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetJobByID.fulfilled, (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    });
    builder.addCase(fetchGetJobByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const jobReducer = JobSlice.reducer;
export const jobByIDReducer = JobByIdSlice.reducer;
