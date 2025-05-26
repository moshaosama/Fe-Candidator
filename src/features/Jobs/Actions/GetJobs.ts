import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobService } from "../../../APi/Jobs/JobService";

export const fetchGetJobs = createAsyncThunk(
  "Jobs/fetchGetJobs",
  async (_, thunkAPI) => {
    return jobService.getAllData(_, thunkAPI);
  }
);
