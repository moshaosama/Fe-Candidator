import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobService } from "../../../APi/Jobs/JobService";

export const fetchGetJobByID = createAsyncThunk(
  "Jobs/fetchGetJobByID",
  async (jobId: number, thunkAPI) => {
    return jobService.getJobById(jobId, thunkAPI);
  }
);
