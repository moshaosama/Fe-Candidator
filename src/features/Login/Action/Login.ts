import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginData {
  Email: string;
  Password: string;
}

export const fetchLogin = createAsyncThunk(
  "Login/fetchLogin",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8000/login", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);
