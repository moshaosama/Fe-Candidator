import { createAsyncThunk } from "@reduxjs/toolkit";
import { createRecruiterData } from "../Types/createRecruiterType";
import axios from 'axios'





export const fetchCreateRecruiter = createAsyncThunk("recruiter/createRecruiter", async (data: createRecruiterData, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:8000/create-recruiter", data)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
