import { createAsyncThunk } from "@reduxjs/toolkit";
import { savedJobService } from "../../../APi/SavedJobs/SavedJobsService";

export const fetchCreateSavedJob = createAsyncThunk(
  "SavedJobs/fetchCreateSavedJob",
  async (jobId: string, thunkAPI) => {
    return savedJobService.createNewData(jobId, thunkAPI);
  }
);

export const fetchDeleteSavedJob = createAsyncThunk(
  "ApplyJob/fetchDeleteSavedJob",
  async (jobId: number, thunkAPI) => {
    return savedJobService.DeleteSavedJob(jobId, thunkAPI);
  }
);
