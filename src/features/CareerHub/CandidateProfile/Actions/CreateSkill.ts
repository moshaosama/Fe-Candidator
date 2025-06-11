import { createAsyncThunk } from "@reduxjs/toolkit";
import { editProfileService } from "../../../APi/EditProfile/EditProfileService";
import { CreateSkillData } from "../../../Types/CreateSkill";

export const fetchCreateSkill = createAsyncThunk(
  "EditProfile/fetchCreateSkill",
  async (data: CreateSkillData, thunkAPI: any) => {
    return editProfileService.createNewData(data, thunkAPI);
  }
);
