import { createAsyncThunk } from "@reduxjs/toolkit";
import { savedJobService } from "../../../APi/SavedJobs/SavedJobsService";

export const fetchCreateSavedJob = createAsyncThunk(
  "SavedJobs/fetchCreateSavedJob",
  async (jobId: string, thunkAPI) => {
    return savedJobService.createNewData(jobId, thunkAPI);
  }
);
