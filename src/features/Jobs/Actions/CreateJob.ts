import axios from "axios";
import { JobData } from "../Types/JobData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCreateJob = createAsyncThunk(
  "Jobs/fetchCreateJob",
  async (data: JobData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/create-job",
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
