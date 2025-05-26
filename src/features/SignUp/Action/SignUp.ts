import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpService } from "../../../APi/SignUp/SignUpService";

export interface SignUpData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

export const fetchSignUp = createAsyncThunk(
  "SignUp/fetchSignUp",
  async (data: SignUpData, thunkAPI) => {
    return signUpService.SignUp(data, thunkAPI);
  }
);
