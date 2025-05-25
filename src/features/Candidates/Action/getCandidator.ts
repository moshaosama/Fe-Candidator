import { createAsyncThunk } from "@reduxjs/toolkit";
import { candidateService } from "../../../APi/Candidate/CandidateService";

export const fetchGetCandidator = createAsyncThunk(
  "Candidator/fetchGetCandidator",
  async (_, { rejectWithValue }) => {
    try {
      return candidateService.getAllData();
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || error.message || "Unknown error"
      );
    }
  }
);

export default fetchGetCandidator;
