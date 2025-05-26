import { createAsyncThunk } from "@reduxjs/toolkit";
import { recruiterService } from "../../../APi/Recruiters/recruiterService";
export const fetchGetRecruiter = createAsyncThunk(
  "recruiter/getRecruiter",
  async (_, thunkAPI) => {
    return recruiterService.getAllData(_, thunkAPI);
  }
);
