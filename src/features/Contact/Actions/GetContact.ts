import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetContact = createAsyncThunk(
  "Contact/fetchGetContact",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:8000/get-contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
