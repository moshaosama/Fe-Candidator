import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGetRecruiter = createAsyncThunk("recruiter/getRecruiter", async (_, thunkAPI) => {
    try {
        
        const response = await axios.get("https://be-candidator-production.up.railway.app/get-recruiter")
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
