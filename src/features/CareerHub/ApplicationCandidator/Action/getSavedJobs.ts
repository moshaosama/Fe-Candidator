import { createAsyncThunk } from "@reduxjs/toolkit";
import { savedJobService } from "../../../../APi/SavedJobs/SavedJobsService";

export const fetchGetSavedJobs = createAsyncThunk(
  "SavedJobs/fetchGetSavedJobs",
  async (_, thunkAPI) => {
    return savedJobService.getAllData(_, thunkAPI);
  }
);
