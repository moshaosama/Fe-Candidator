import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateCandidator } from "../Action/CreateCandidator";
import fetchGetCandidator from "../Action/getCandidator";

const initialState = {
  candidator: {},
  loading: false,
  error: "",
};

const CandidatorSlice = createSlice({
  name: "Candidator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateCandidator.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateCandidator.fulfilled, (state, action) => {
      state.loading = false;
      state.candidator = action.payload;
    });
    builder.addCase(fetchCreateCandidator.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchGetCandidator.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetCandidator.fulfilled, (state, action) => {
      state.loading = false;
      state.candidator = action.payload;
    });
    builder.addCase(fetchGetCandidator.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default CandidatorSlice.reducer;
