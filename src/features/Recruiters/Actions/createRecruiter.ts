import { createAsyncThunk } from "@reduxjs/toolkit";
import { createRecruiterData } from "../Types/createRecruiterType";
import axios from "axios";

export const fetchCreateRecruiter = createAsyncThunk(
  "recruiter/createRecruiter",
  async (data: createRecruiterData, thunkAPI) => {
    try {
      await axios.post(
        // "https://be-candidator-production.up.railway.app/create-recruiter",
        "http://localhost:8000/create-recruiter",
        data
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
