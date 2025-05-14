import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetCompanyByID = createAsyncThunk(
  "Company/fetchGetCompanyByID",
  async (companyId: number, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:8000/get-company-by-id/${companyId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
);
