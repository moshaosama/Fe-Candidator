import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetJobs = createAsyncThunk(
  "Jobs/fetchGetJobs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8000/get-jobs");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
