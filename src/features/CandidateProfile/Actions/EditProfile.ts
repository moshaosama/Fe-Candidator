import { createAsyncThunk } from "@reduxjs/toolkit";
import { editProfileService } from "../../../APi/EditProfile/EditProfileService";

export const fetchEditProfile = createAsyncThunk(
  "EditProfile/fetchCreateCandidator",
  async (data: any, ThunkAPi) => {
    return editProfileService.EditProfile(data, ThunkAPi);
  }
);
