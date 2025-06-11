import { createAsyncThunk } from "@reduxjs/toolkit";
import { resumeService } from "../../../../APi/Resumes/ResumeService";

export const fetchCreateResume = createAsyncThunk(
  "Resume/fetchCreateResume",
  async (data: any, thunkAPI: any) => {
    return resumeService.createNewData(data, thunkAPI);
  }
);

export const fetchgetResumeByid = createAsyncThunk(
  "Resume/fetchgetResumeByid",
  async (candidate_id: number, thunkAPI: any) => {
    return resumeService.getAllData(candidate_id, thunkAPI);
  }
);
