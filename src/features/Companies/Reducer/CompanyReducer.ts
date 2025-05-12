import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateCompany } from "../Actions/CreateCompany";
import { fetchGetCompanies } from "../Actions/GetCompanies";

const initialState = {
  company: {},
  isLoading: false,
  error: "",
};

const CompanyReducer = createSlice({
  name: "Company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateCompany.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCreateCompany.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(fetchCreateCompany.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchGetCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetCompanies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.company = action.payload;
    });
    builder.addCase(fetchGetCompanies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default CompanyReducer.reducer;
