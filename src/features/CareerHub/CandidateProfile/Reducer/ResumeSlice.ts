import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateResume, fetchgetResumeByid } from "../Actions/Resume";

const initialState = {
  resumes: {},
  loading: false,
  error: "",
};
const ResumeSlice = createSlice({
  name: "Resume",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateResume.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateResume.fulfilled, (state, action) => {
      state.loading = false;
      state.resumes = action.payload;
    });
    builder.addCase(fetchCreateResume.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchgetResumeByid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchgetResumeByid.fulfilled, (state, action) => {
      state.loading = false;
      state.resumes = action.payload;
    });
    builder.addCase(fetchgetResumeByid.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default ResumeSlice.reducer;
