import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface createStagesData {
  stageTitle: string;
  JobID: string;
}

export const fetchCreateStage = createAsyncThunk(
  "Stages/fetchCreateStage",
  async (data: createStagesData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/create-stage/${data.JobID}`,
        data
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
