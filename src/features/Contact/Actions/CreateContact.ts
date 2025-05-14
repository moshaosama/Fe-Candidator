import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactData } from "../Types/ContactData";

export const fetchCreateContact = createAsyncThunk(
  "Contact/fetchCreateContact",
  async (data: ContactData, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/create-contact`,
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
