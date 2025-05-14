import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDeleteRecruiterById = createAsyncThunk(
  "recruiter/deleteRecruiterById",
  async (id: number, thunkAPI: any) => {
    try {
      const response = await axios.delete(
        // `https://be-candidator-production.up.railway.app/delete-recruiter-by-id/${id}`
        `http://localhost:8000/delete-recruiter-by-id/${id}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
);
