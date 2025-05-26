import { createAsyncThunk } from "@reduxjs/toolkit";
import { stageService } from "../../../APi/Stages/stagesService";
export interface createStagesData {
  stageTitle: string;
  JobID: string;
}

export const fetchCreateStage = createAsyncThunk(
  "Stages/fetchCreateStage",
  async (data: createStagesData, thunkApi) => {
    return stageService.createNewData(data, thunkApi);
  }
);
