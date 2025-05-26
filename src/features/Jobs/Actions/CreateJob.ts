import { JobData } from "../Types/JobData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobService } from "../../../APi/Jobs/JobService";

export const fetchCreateJob = createAsyncThunk(
  "Jobs/fetchCreateJob",
  async (data: JobData, thunkAPI) => {
    return jobService.createNewData(data, thunkAPI);
  }
);
