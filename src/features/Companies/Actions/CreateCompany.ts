import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateCompanyData } from "../Types/CompanyType";

export const fetchCreateCompany = createAsyncThunk(
  "Company/fetchCreateCompany",
  async (data: CreateCompanyData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8000/create-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData.message || "Request failed");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
