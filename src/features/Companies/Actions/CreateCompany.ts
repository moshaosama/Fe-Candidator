import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateCompanyData } from "../Types/CompanyType";
import axios from "axios";

export const fetchCreateCompany = createAsyncThunk(
  "Company/fetchCreateCompany",
  async (data: CreateCompanyData, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://be-candidator-production.up.railway.app/create-company",
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
