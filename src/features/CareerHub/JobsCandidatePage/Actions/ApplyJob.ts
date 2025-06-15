import { createAsyncThunk } from "@reduxjs/toolkit";
import { applyJobService } from "../../../../APi/ApplyJob/applyJobService";

export const fetchApplyJob = createAsyncThunk(
  "ApplyJob/fetchApplyJob",
  (data: any, thunkAPi: any) => {
    return applyJobService.createNewData(data, thunkAPi);
  }
);

export const fetchGetApplyJobByCandidate = createAsyncThunk(
  "ApplyJob/fetchGetApplyJobs",
  (candidator_id: any, thunkAPi: any) => {
    return applyJobService.getAllDatabyCandidator(candidator_id, thunkAPi);
  }
);

export const fetchAllGetApplyJob = createAsyncThunk(
  "ApplyJob/fetchAllGetApplyJob",
  (_?: any, thunkAPi?: any) => {
    return applyJobService.getAllData(_, thunkAPi);
  }
);
