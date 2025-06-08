import axios from "axios";
import ParentService from "../ParentService";
import { ApplyJob } from "../../Types/ApplyJob";

class ApplyJobService extends ParentService {
  async createNewData(data: ApplyJob, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/apply-job`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  async getAllData(candidator_id?: any, thunkAPI?: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-apply-job/${candidator_id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
}

export const applyJobService = new ApplyJobService();
