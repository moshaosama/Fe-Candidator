import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateCandidator } from "../Action/CreateCandidator";
import fetchGetCandidator from "../Action/getCandidator";
import { fetchGetCandidateByStage } from "../Action/GetCandidateByStage";
import { fetchGetCandidateByID } from "../Action/getCandidateById";

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

const CandidateByStageSlice = createSlice({
  name: "CandidateByStage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCandidateByStage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetCandidateByStage.fulfilled, (state, action) => {
      state.loading = false;
      state.candidator = action.payload;
    });
    builder.addCase(fetchGetCandidateByStage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

const CandidateByIdSlice = createSlice({
  name: "CandidateByID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCandidateByID.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetCandidateByID.fulfilled, (state, action) => {
      state.loading = false;
      state.candidator = action.payload;
    });
    builder.addCase(fetchGetCandidateByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

const CandidatorReducer = {
  Candidator: CandidatorSlice.reducer,
  CandidateByStage: CandidateByStageSlice.reducer,
  CandidateById: CandidateByIdSlice.reducer,
};

export default CandidatorReducer;
