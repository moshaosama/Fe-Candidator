import { createAsyncThunk } from "@reduxjs/toolkit";

import { recruiterService } from "../../../APi/Recruiters/recruiterService";

export const fetchDeleteRecruiterById = createAsyncThunk(
  "recruiter/deleteRecruiterById",
  async (id: number, thunkAPI: any) => {
    return recruiterService.deleteRecruiterbyid(id, thunkAPI);
  }
);
