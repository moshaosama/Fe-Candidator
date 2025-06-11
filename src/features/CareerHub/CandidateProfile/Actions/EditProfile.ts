import { createAsyncThunk } from "@reduxjs/toolkit";
import { editProfileService } from "../../../../APi/EditProfile/EditProfileService";

interface EditProfileServiceData {
  data: any;
  candidateId: number;
}

export const fetchEditProfile = createAsyncThunk(
  "EditProfile/fetchCreateCandidator",
  async (data: EditProfileServiceData, ThunkAPi) => {
    return editProfileService.EditProfile(
      data.candidateId,
      data.data,
      ThunkAPi
    );
  }
);
