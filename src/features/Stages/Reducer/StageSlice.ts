import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateStage } from "../Actions/CreateStages";
import { fetchGetStages } from "../Actions/GetStages";
const initialState = {
  stages: {},
  loading: false,
  error: "",
};

const StagesSlice = createSlice({
  name: "Stages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateStage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateStage.fulfilled, (state, action) => {
      state.loading = false;
      state.stages = action.payload;
    });
    builder.addCase(fetchCreateStage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchGetStages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetStages.fulfilled, (state, action) => {
      state.loading = false;
      state.stages = action.payload;
    });
    builder.addCase(fetchGetStages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default StagesSlice.reducer;
