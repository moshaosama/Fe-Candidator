import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyService } from "../../../APi/Company/CompanyService";

export const fetchGetCompanies = createAsyncThunk(
  "Company/fetchGetCompanies",
  async () => {
    return companyService.getAllData();
  }
);
