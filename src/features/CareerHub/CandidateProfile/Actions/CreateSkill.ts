import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateSkillData } from "../../../../Types/CreateSkill";
import { editProfileService } from "../../../../APi/EditProfile/EditProfileService";

export const fetchCreateSkill = createAsyncThunk(
  "EditProfile/fetchCreateSkill",
  async (data: CreateSkillData, thunkAPI: any) => {
    return editProfileService.createNewData(data, thunkAPI);
  }
);
