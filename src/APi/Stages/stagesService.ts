import axios from "axios";
import ParentService from "../ParentService";
import { createStagesData } from "../../features/Stages/Actions/CreateStages";

class StagesService extends ParentService {
  async createNewData(data: createStagesData, thunkAPI: any) {
    try {
      const response = await axios.post(
        `${this.url}/create-stage/${data.JobID}`,
        data
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
  async getAllData(_?: any, thunkAPI?: any) {
    try {
      const response = await axios.get(`${this.url}/get-stages`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
}

export const stageService = new StagesService();
