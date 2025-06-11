import { createAsyncThunk } from "@reduxjs/toolkit";
import { applyJobService } from "../../../../APi/ApplyJob/applyJobService";

export const fetchApplyJob = createAsyncThunk(
  "ApplyJob/fetchApplyJob",
  (data: any, thunkAPi: any) => {
    return applyJobService.createNewData(data, thunkAPi);
  }
);

export const fetchGetApplyJobs = createAsyncThunk(
  "ApplyJob/fetchGetApplyJobs",
  (candidator_id: any, thunkAPi: any) => {
    return applyJobService.getAllData(candidator_id, thunkAPi);
  }
);
