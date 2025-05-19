import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetStages = createAsyncThunk(
  "Stages/fetchGetStages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8000/get-stages");
      return response.data;
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);
