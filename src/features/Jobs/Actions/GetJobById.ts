import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetJobByID = createAsyncThunk(
  "Jobs/fetchGetJobByID",
  async (jobId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/get-job-by-id/${jobId}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);
