import { createAsyncThunk } from "@reduxjs/toolkit";
import { createRecruiterData } from "../Types/createRecruiterType";
import { recruiterService } from "../../../APi/Recruiters/recruiterService";

export const fetchCreateRecruiter = createAsyncThunk(
  "recruiter/createRecruiter",
  async (data: createRecruiterData, thunkAPI) => {
    return recruiterService.createNewData(data, thunkAPI);
  }
);
