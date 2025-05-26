import { createAsyncThunk } from "@reduxjs/toolkit";
import { stageService } from "../../../APi/Stages/stagesService";

export const fetchGetStages = createAsyncThunk(
  "Stages/fetchGetStages",
  async (_, thunkAPI) => {
    return stageService.getAllData(thunkAPI);
  }
);
