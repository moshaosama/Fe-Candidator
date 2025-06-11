import { createAsyncThunk } from "@reduxjs/toolkit";
import { editProfileService } from "../../../../APi/EditProfile/EditProfileService";

export const fetchGetSkill = createAsyncThunk(
  "EditProfile/fetchGetSkill",
  async (candidator_id, thunkAPI) => {
    return editProfileService.getAllData(candidator_id!, thunkAPI);
  }
);
