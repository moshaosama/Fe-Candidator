import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UpdateCandidateinStageData {
  JobID: string;
  CandidateID: string;
}

export const fetchUpdateCandidateinStage = createAsyncThunk(
  "Jobs/fetchCreateCandidateinStage",
  async (Data: UpdateCandidateinStageData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/create-candidate-in-stage",
        Data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
