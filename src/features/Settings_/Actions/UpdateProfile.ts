import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  changeProfileService,
  UpdateProfileData,
} from "../../../APi/ChangeProfile/ChangeProfileService";

export const fetchUpdateProfile = createAsyncThunk(
  "UpdateProfile/fetchUpdateProfile",
  (data: UpdateProfileData, thunkAPI: any) => {
    return changeProfileService.UpdateProfile(data, thunkAPI);
  }
);
