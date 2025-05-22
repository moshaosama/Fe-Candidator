import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface SignUpData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

export const fetchSignUp = createAsyncThunk(
  "SignUp/fetchSignUp",
  async (data: SignUpData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8000/sign-up", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err as string);
    }
  }
);
