import { createAsyncThunk } from "@reduxjs/toolkit";
import { jobService } from "../../../APi/Jobs/JobService";

export const fetchGetJobByCompanyId = createAsyncThunk(
  "Jobs/fetchGetJobByCompanyId",
  async (companyId: number, thunkAPI) => {
    return jobService.getJobByCompanyID(companyId, thunkAPI);
  }
);
