import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface GetCandidateByStage {
  jobId: string;
  stageTitle: string;
}

export const fetchGetCandidateByStage = createAsyncThunk(
  "Candidator/fetchGetCandidateByStage",
  async (data: GetCandidateByStage, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/get-candidate-by-stage/${data.jobId}/${data.stageTitle}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
