import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CreateCandidatorData {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  LinkedInProfile: string;
  Resume: string;
}

export const fetchCreateCandidator = createAsyncThunk(
  "Candidator/fetchCreateCandidator",
  async (data: CreateCandidatorData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/create-candidate",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
