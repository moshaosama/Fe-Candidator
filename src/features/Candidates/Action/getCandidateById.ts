import { createAsyncThunk } from "@reduxjs/toolkit";
import { candidateService } from "../../../APi/Candidate/CandidateService";

export const fetchGetCandidateByID = createAsyncThunk(
  "CandidateByID/fetchGetCandidateByID",
  async (candidateId: string, thunkAPI: any) => {
    return candidateService.getCandidateByID(candidateId, thunkAPI);
  }
);
