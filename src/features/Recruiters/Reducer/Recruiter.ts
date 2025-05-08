import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateRecruiter } from "../Actions/createRecruiter";

const initialState = {
    recruiter: [],
    isLoading: false,
    error: ""
}


const recruiterSlice = createSlice({
    name: "recruiter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCreateRecruiter.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCreateRecruiter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.recruiter = action.payload;
        })
        builder.addCase(fetchCreateRecruiter.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})


export default recruiterSlice.reducer;