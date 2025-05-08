import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateRecruiter } from "../Actions/createRecruiter";
import { fetchGetRecruiter } from "../Actions/getRecruiters";

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
        builder.addCase(fetchCreateRecruiter.fulfilled, (state) => {
            state.isLoading = false;
        })
        builder.addCase(fetchCreateRecruiter.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })

        builder.addCase(fetchGetRecruiter.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetRecruiter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.recruiter = action.payload;
        })
        builder.addCase(fetchGetRecruiter.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        })
    }
})


export default recruiterSlice.reducer;