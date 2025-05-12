import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetCompanies = createAsyncThunk(
  "Company/fetchGetCompanies",
  async () => {
    try {
      const response = await axios.get(
        "https://be-candidator-production.up.railway.app/get-companies"
      );
      return response.data;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);
