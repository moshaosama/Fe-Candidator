import { createAsyncThunk } from "@reduxjs/toolkit";
import { createRecruiterData } from "../Types/createRecruiterType";

export const fetchCreateRecruiter = createAsyncThunk(
  "recruiter/createRecruiter",
  async (data: createRecruiterData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8000/create-recruiter", {
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);
