import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateCompanyData } from "../Types/CompanyType";
import { companyService } from "../../../APi/Company/CompanyService";

export const fetchCreateCompany = createAsyncThunk(
  "Company/fetchCreateCompany",
  async (data: CreateCompanyData, thunkAPI) => {
    return companyService.createNewData(data, thunkAPI);
  }
);
