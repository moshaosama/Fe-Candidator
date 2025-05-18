import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetCandidator = createAsyncThunk(
  "Candidator/fetchGetCandidator",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/get-candidates");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default fetchGetCandidator;
