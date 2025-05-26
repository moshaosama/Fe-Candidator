import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../../APi/Login/loginService";

export interface LoginData {
  Email: string;
  Password: string;
}

export const fetchLogin = createAsyncThunk(
  "Login/fetchLogin",
  async (data: LoginData, thunkAPI: any) => {
    return loginService.Login(data, thunkAPI);
  }
);
