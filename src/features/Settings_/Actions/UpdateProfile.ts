import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ChangePasswordData,
  changeProfileService,
  UpdateProfileData,
} from "../../../APi/ChangeProfile/ChangeProfileService";

export const fetchUpdateProfile = createAsyncThunk(
  "UpdateProfile/fetchUpdateProfile",
  (data: UpdateProfileData, thunkAPI: any) => {
    return changeProfileService.UpdateProfile(data, thunkAPI);
  }
);

export const fetchChangePassword = createAsyncThunk(
  "UpdateProfile/fetchChangePassword",
  (data: ChangePasswordData, thunkAPI: any) => {
    return changeProfileService.ChangePassword(data, thunkAPI);
  }
);
