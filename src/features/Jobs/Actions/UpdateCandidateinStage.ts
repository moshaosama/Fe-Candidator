import { createAsyncThunk } from "@reduxjs/toolkit";
import { candidateService } from "../../../APi/Candidate/CandidateService";

export interface UpdateCandidateinStageData {
  JobID: string;
  CandidateID: string;
}

export const fetchUpdateCandidateinStage = createAsyncThunk(
  "Jobs/fetchUpdateCandidateinStage",
  async (Data: UpdateCandidateinStageData, thunkAPI) => {
    return candidateService.UpdateCandidateinStage(Data, thunkAPI);
  }
);
