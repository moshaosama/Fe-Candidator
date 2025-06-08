import axios from "axios";
import ParentService from "../ParentService";
import { CreateSkillData } from "../../Types/CreateSkill";

class EditProfileService extends ParentService {
  async EditProfile(candidateId: number, data: any, thunkAPI: any) {
    try {
      const response = await axios.put(
        `${this.url}/edit-candidate-profile/${candidateId}`,
        data
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
  async createNewData(data: CreateSkillData, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/create-skill`, data);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
  async getAllData(candidator_id?: number, thunkAPI?: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-skills/${candidator_id}`
      );

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const editProfileService = new EditProfileService();
