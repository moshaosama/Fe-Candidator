import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyService } from "../../../APi/Company/CompanyService";

export const fetchGetCompanyByID = createAsyncThunk(
  "Company/fetchGetCompanyByID",
  async (companyId: number, thunkAPI) => {
    return companyService.getCompanyById(companyId, thunkAPI);
  }
);
